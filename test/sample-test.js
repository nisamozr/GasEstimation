const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("PolygonNFT1155V2");
    const greeter = await Greeter.deploy("Hello","Hloo");
    await greeter.deployed();

    const to_address = "0xA5604b0f23307a661f62e4C3767973ea8AaE00F8"
    const _uri = "hfdxcvjdl"
    const tokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const amount = [2000, 200, 4, 4, 4, 4, 4, 4, 4, 4,2000, 200, 4, 4, 4, 4, 4, 4, 4, 4]
    await greeter.mint(to_address, _uri,tokenIds,amount)

  });
});
