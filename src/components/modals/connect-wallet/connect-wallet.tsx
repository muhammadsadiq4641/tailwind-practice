"use client";
import BlockchainConstants from "@constants/blockchain";

import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
} from "@web3modal/ethers5/react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const chains = BlockchainConstants.chains;
const metadata = BlockchainConstants.metadata;

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains,
  projectId,
});

export default function Web3ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useWeb3Modal();
  return children;
}
