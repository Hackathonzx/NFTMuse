// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    struct Listing {
        uint256 price;
        address seller;
    }

    struct Offer {
        uint256 offerPrice;
        address offerer;
    }

    mapping(address => mapping(uint256 => Listing)) public listings;
    mapping(address => mapping(uint256 => Offer)) public offers;

    event NFTListed(address indexed nftAddress, uint256 indexed tokenId, uint256 price, address seller);
    event NFTBought(address indexed nftAddress, uint256 indexed tokenId, uint256 price, address buyer);
    event OfferMade(address indexed nftAddress, uint256 indexed tokenId, uint256 offerPrice, address offerer);
    event OfferAccepted(address indexed nftAddress, uint256 indexed tokenId, uint256 offerPrice, address buyer);

    // List an NFT for sale
    function listNFT(address nftAddress, uint256 tokenId, uint256 price) external {
        IERC721 nft = IERC721(nftAddress);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(price > 0, "Price must be greater than zero");

        nft.transferFrom(msg.sender, address(this), tokenId);

        listings[nftAddress][tokenId] = Listing(price, msg.sender);

        emit NFTListed(nftAddress, tokenId, price, msg.sender);
    }

    // Buy a listed NFT
    function buyNFT(address nftAddress, uint256 tokenId) external payable nonReentrant {
        Listing memory listing = listings[nftAddress][tokenId];
        require(msg.value >= listing.price, "Insufficient funds");

        // Delete the listing
        delete listings[nftAddress][tokenId];

        // Pay the seller
        payable(listing.seller).transfer(listing.price);

        // Transfer the NFT
        IERC721(nftAddress).safeTransferFrom(address(this), msg.sender, tokenId);

        emit NFTBought(nftAddress, tokenId, listing.price, msg.sender);
    }

    // Make an offer for an NFT
    function makeOffer(address nftAddress, uint256 tokenId) external payable {
        require(msg.value > 0, "Offer price must be greater than zero");
        require(offers[nftAddress][tokenId].offerPrice == 0, "Existing offer must be withdrawn first");

        offers[nftAddress][tokenId] = Offer(msg.value, msg.sender);

        emit OfferMade(nftAddress, tokenId, msg.value, msg.sender);
    }

    // Accept an offer for an NFT
    function acceptOffer(address nftAddress, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftAddress][tokenId];
        Listing memory listing = listings[nftAddress][tokenId];

        require(listing.seller == msg.sender, "Not the seller");
        require(offer.offerPrice > 0, "No valid offer");

        // Delete the offer and listing
        delete offers[nftAddress][tokenId];
        delete listings[nftAddress][tokenId];

        // Pay the seller
        payable(msg.sender).transfer(offer.offerPrice);

        // Transfer the NFT
        IERC721(nftAddress).safeTransferFrom(address(this), offer.offerer, tokenId);

        emit OfferAccepted(nftAddress, tokenId, offer.offerPrice, offer.offerer);
    }
}
