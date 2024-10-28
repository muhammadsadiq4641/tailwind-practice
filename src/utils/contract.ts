
namespace ContractUtils {
  export const config: any = {};

  export const setConfig = (config: any) => {
    config = { ...config };
  };

 
  export const getNetworkExplorer = (network: string): string => {
    switch (network) {
      case "eth":
      case "ethereum":
        return "https://etherscan.io";
      case "goerli":
        return "https://goerli.etherscan.io";
      case "bsc":
        return "https://bscscan.com";
      case "bsc testnet":
        return "https://testnet.bscscan.com";
      case "mumbai":
        return "https://mumbai.polygonscan.com/";
      case "polygon":
        return "https://polygonscan.com";
      case "avax":
        return "https://snowtrace.io/";
      default:
        return "";
    }
  };

}

export default ContractUtils;
