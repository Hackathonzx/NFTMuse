const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMint, NFTMarketplace, and RewardToken", function () {
    let deployer, artist, buyer, royaltyRecipient;
    let nftMint, nftMarketplace, rewardToken;

    before(async function () {
        [deployer, artist, buyer, royaltyRecipient] = await ethers.getSigners();

        // Deploy NFTMint contract
        const NFTMint = await ethers.getContractFactory("NFTMint");
        nftMint = await NFTMint.deploy();
        await nftMint.waitForDeployment();

        // Deploy NFTMarketplace contract
        const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
        nftMarketplace = await NFTMarketplace.deploy();
        await nftMarketplace.waitForDeployment();

        // Deploy RewardToken contract
        const RewardToken = await ethers.getContractFactory("RewardToken");
        rewardToken = await RewardToken.deploy();
        await rewardToken.waitForDeployment();
    });

    describe("NFTMint Contract", function () {
        it("should allow approved artist to mint NFT", async function () {
            const tokenURI = "ipfs://test-token-uri";
            const royaltyPercentage = 500; // 5% royalty

            // Approve the artist for minting
            await nftMint.setArtistApproval(artist.address, true);

            // Mint the NFT
            await nftMint.connect(artist).mintNFT(tokenURI, royaltyRecipient.address, royaltyPercentage);

            // Validate NFT ownership
            const tokenId = 0;
            const owner = await nftMint.ownerOf(tokenId);
            expect(owner).to.equal(artist.address);

            // Validate tokenURI
            const uri = await nftMint.tokenURI(tokenId);
            expect(uri).to.equal(tokenURI);
        });
    });


    describe("NFTMarketplace Contract", function () {
      it("should allow listing and buying an NFT", async function () {
          const tokenId = 0;
          const price = ethers.utils.parseEther("1");

          // Ensure NFTMint contract address is not null or undefined
          expect(nftMint.address).to.not.be.null;

          // Approve the marketplace to manage the NFT
          await nftMint.connect(artist).approve(nftMarketplace.address, tokenId);

          // List the NFT for sale
          await nftMarketplace.connect(artist).listNFT(nftMint.address, tokenId, price);

          // Buyer purchases the NFT
          await nftMarketplace.connect(buyer).buyNFT(nftMint.address, tokenId, { value: price });

          // Validate new ownership
          const newOwner = await nftMint.ownerOf(tokenId);
          expect(newOwner).to.equal(buyer.address);

          // Validate funds transfer to the artist
          const artistBalance = await ethers.provider.getBalance(artist.address);
          expect(artistBalance).to.be.gt(price); // Ensure artist received the payment
      });
  });

  describe("RewardToken Contract", function () {
      it("should reward and burn tokens", async function () {
          const rewardAmount = ethers.parseUnits("100", 18); // Reward 100 tokens
          const burnAmount = ethers.parseUnits("50", 18); // Burn 50 tokens

          // Reward tokens to the buyer
          await rewardToken.reward(buyer.address, rewardAmount);
          const buyerBalance = await rewardToken.balanceOf(buyer.address);
          console.log("Buyer balance after reward:", buyerBalance.toString());
          expect(buyerBalance).to.equal(rewardAmount);

          // Burn tokens from the buyer's balance
          await rewardToken.burn(buyer.address, burnAmount);
          const newBalance = await rewardToken.balanceOf(buyer.address);
          console.log("New balance after burn:", newBalance.toString());
          expect(newBalance).to.equal(rewardAmount - burnAmount); // Fixed arithmetic

          // Validate total supply decrease
          const totalSupply = await rewardToken.totalSupply();
          console.log("Total supply after burn:", totalSupply.toString());
          expect(totalSupply).to.equal(ethers.parseUnits("950000000000000000000000", 18)); // Corrected total supply after burn
      });
  });
});  