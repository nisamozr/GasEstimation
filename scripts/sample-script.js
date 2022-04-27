
const hre = require("hardhat");

async function main() {

  const Greeter = await hre.ethers.getContractFactory("PolygonNFT1155V2");
  const greeter = await Greeter.deploy("Hello", "hello");

  await greeter.deployed();

  console.log("PolygonNFT1155V2 deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
