namespace env {

  export const RPC: { [key: number]: string } = {
    1: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
    11155111: `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
  };

  export const DEFAULT_CHAIN: number = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID;

}

export default env;
