import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { networkConfig } from "../helper-hardhat-config";

const NFT_NAME = process.env.NFT_NAME || "Your Collection Name";
const NFT_SYMBOL = process.env.NFT_SYMBOL || "ABC";
const NFT_MAX_SUPPLY = process.env.NFT_MAX_SUPPLY || "1000";
const NFT_MINT_COST = ethers.utils
  .parseEther(process.env.NFT_MINT_COST || "0.1")
  .toString();
const NFT_REVEAL_BATCH_SIZE = process.env.NFT_REVEAL_BATCH_SIZE || "10";
const NFT_REVEAL_INTERVAL = process.env.NFT_REVEAL_INTERVAL || "3600";

const func: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
  getChainId,
}: HardhatRuntimeEnvironment) {
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  let linkTokenAddress: string;
  let vrfCoordinatorAddress: string;

  if (chainId === "31337") {
    const LinkToken = await get("LinkToken");
    linkTokenAddress = LinkToken.address;
    const VRFCoordinatorMock = await get("VRFCoordinatorMock");
    vrfCoordinatorAddress = VRFCoordinatorMock.address;
  } else {
    linkTokenAddress = networkConfig[chainId].linkToken as string;
    vrfCoordinatorAddress = networkConfig[chainId].vrfCoordinator as string;
  }
  const { keyHash, fee } = networkConfig[chainId];

  await deploy("NFTCollection", {
    from: deployer,
    args: [
      NFT_NAME,
      NFT_SYMBOL,
      NFT_MAX_SUPPLY,
      NFT_MINT_COST,
      NFT_REVEAL_BATCH_SIZE,
      NFT_REVEAL_INTERVAL,
      vrfCoordinatorAddress,
      linkTokenAddress,
      fee,
      keyHash,
    ],
    log: true,
  });
};

func.tags = ["all", "main"];

export default func;
