namespace BlockchainConstants {
  export const chains = [
    {
      chainId: 1,
      name: "Ethereum",
      currency: "ETH",
      explorerUrl: "https://etherscan.io",
      rpcUrl: "https://cloudflare-eth.com",
    },
    {
      chainId: 42161,
      name: "Arbitrum",
      currency: "ETH",
      explorerUrl: "https://arbiscan.io",
      rpcUrl: "https://arb1.arbitrum.io/rpc",
    },
    {
      chainId: 5,
      name: "Goerli",
      currency: "ETH",
      explorerUrl: "https://goerli.etherscan.io/",
      rpcUrl: "https://goerli.blockpi.network/v1/rpc/public",
    },
    {
      chainId: 10,
      name: "Optimism",
      currency: "ETH",
      explorerUrl: "https://optimistic.etherscan.io",
      rpcUrl: "https://mainnet.optimism.io",
    },
  ];

  export const metadata = {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  export const Ipfs = {
    PATH: "https://ipfs.infura.io/ipfs",
    ADDRESS: "https://ipfs.infura.io:5001/api/v0",
  };
  
}

export default BlockchainConstants;
