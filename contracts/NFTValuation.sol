// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardToken is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1_000_000 * 10**18;

    constructor() ERC20("Onboard Reward Token", "ORT") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function reward(address recipient, uint256 amount) external onlyOwner {
        _transfer(owner(), recipient, amount);
    }

    function burn(address account, uint256 amount) external onlyOwner {
        _burn(account, amount);
    }
}
