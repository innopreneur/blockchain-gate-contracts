// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const myNFTToken = await hre.ethers.deployContract("GateNFT", ['GateNFT', 'GATE', 'https://ipfs.io/ipfs/QmaN6zf4gCnp46LMKNMUY58RKix8eckwpkGoB6C2vkqXMH', 'https://ipfs.io/ipfs/QmaN6zf4gCnp46LMKNMUY58RKix8eckwpkGoB6C2vkqXMH'], {
    value: 0,
    gasLimit: '8000000'
  });

  await myNFTToken.waitForDeployment();

  console.log(
    `myNFTToken deployed to ${myNFTToken.target}`
  );
}

async function mint(){
  const GateNFTFactory = await hre.ethers.getContractFactory('GateNFT')
  const GateNFT = GateNFTFactory.attach("0x19baF9b593BF5F5309Fd4f7E26ADee400c61eB3C")
  const tx = await GateNFT.mint(1)
  
  console.log("Mint Transaction - ", tx)
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
