
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const GovToken = await hre.ethers.getContractFactory("GovToken");
  const govToken = await GovToken.deploy();

  await govToken.deployed();

  console.log("GovToken deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
