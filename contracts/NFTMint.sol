// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFTMint is ERC721URIStorage, ERC721Enumerable, ERC2981, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // Mapping to store approved artists who can mint NFTs
    mapping(address => bool) private approvedArtists;

    // Event to log minting details
    event NFTMinted(address indexed artist, uint256 tokenId, string tokenURI, address royaltyRecipient, uint96 royaltyPercentage);

    // Event to log royalty adjustments
    event RoyaltyUpdated(uint256 tokenId, address newRoyaltyRecipient, uint96 newRoyaltyPercentage);

    // Constructor initializes the ERC721 contract with a name and symbol
    constructor() ERC721("NFTMuseToken", "NFTM") {}

    // Function to mint new NFT (only approved artists can mint)
    function mintNFT(
        string memory _tokenURI, // Rename parameter to avoid shadowing
        address royaltyRecipient,
        uint96 royaltyPercentage
    ) external {
        // Ensure the caller is an approved artist
        require(approvedArtists[msg.sender], "Not an approved artist");

        uint256 newTokenId = _tokenIdCounter.current();

        // Mint the NFT to the caller
        _safeMint(msg.sender, newTokenId);
        // Set the token's URI
        _setTokenURI(newTokenId, _tokenURI);
        // Set the royalty info (this sets the royalties for the token)
        _setTokenRoyalty(newTokenId, royaltyRecipient, royaltyPercentage);

        // Emit event for minting
        emit NFTMinted(msg.sender, newTokenId, _tokenURI, royaltyRecipient, royaltyPercentage);

        // Increment the tokenId counter for the next NFT
        _tokenIdCounter.increment();
    }

    // Function to approve or revoke an artist's minting permission
    function setArtistApproval(address artist, bool isApproved) external onlyOwner {
        approvedArtists[artist] = isApproved;
    }

    // Function to update royalty info for a specific NFT (only owner or the original royalty recipient can change royalties)
    function updateRoyalty(
        uint256 tokenId,
        address newRoyaltyRecipient,
        uint96 newRoyaltyPercentage
    ) external {
        // Provide a dummy sale price, since it's required by royaltyInfo function.
        uint256 dummySalePrice = 1; // A value to pass as the sale price

        // Get the current royalty information
        (address currentRoyaltyRecipient, ) = royaltyInfo(tokenId, dummySalePrice); // Add the sale price argument

        // Ensure the caller is either the owner or the current royalty recipient
        require(
            msg.sender == owner() || msg.sender == currentRoyaltyRecipient,
            "Only the owner or the current royalty recipient can update royalty"
        );
        
        // Update the royalty info
        _setTokenRoyalty(tokenId, newRoyaltyRecipient, newRoyaltyPercentage);

        // Emit event for royalty update
        emit RoyaltyUpdated(tokenId, newRoyaltyRecipient, newRoyaltyPercentage);
    }

    // Override supportsInterface to include ERC721Enumerable and ERC2981
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721URIStorage, ERC721Enumerable, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Override _beforeTokenTransfer to include ERC721Enumerable functionality
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // Override _burn to handle multiple inheritance
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    // Override tokenURI to handle multiple inheritance
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721URIStorage, ERC721)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
