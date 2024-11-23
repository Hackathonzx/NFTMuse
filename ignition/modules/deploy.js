const hre = require("hardhat");

async function main() {
  // Deploy NFTMint contract
  const NFTMint = await hre.ethers.getContractFactory("NFTMint");
  const nftMint = await NFTMint.deploy();
  await nftMint.waitForDeployment();
  console.log("NFTMint deployed to:", await nftMint.getAddress());

  // Deploy NFTMarketplace contract
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.waitForDeployment();
  console.log("NFTMarketplace deployed to:", await nftMarketplace.getAddress());

  // Deploy RewardToken contract
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const rewardToken = await RewardToken.deploy();
  await rewardToken.waitForDeployment();
  console.log("RewardToken deployed to:", await rewardToken.getAddress());

  console.log("All contracts deployed successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
