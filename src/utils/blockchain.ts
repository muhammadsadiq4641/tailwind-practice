import BN from "bn.js";
import { ethers } from "ethers";
const { WAValidator } = require("wallet-address-validator");
import BlockchainConstants from "@constants/blockchain";

namespace BLockchainUtils {
  export const addressConvertor = (address: string): string => {
    if ((address || "").length < 10) {
      return address || "";
    }
    return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
  };

  export const contract = (web3: any, abi: any, address: string) => {
    return new web3.eth.Contract(abi, address);
  };

  export const isEthereumAddress = (address: any): boolean => {
    if (typeof address !== "string") {
      return false;
    }

    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      return false;
    }
    return true;
  };

  export const addZeros = (x: number): string => {
    if (x === 0) {
      return "1";
    } else {
      return "1" + "0".repeat(x);
    }
  };

  export const zero: BN = new BN(0);
  export const negative1: BN = new BN(-1);

  export const getValueOfUnit = (decimals: number): BN => {
    var unitValue = addZeros(decimals); // eslint-disable-line

    if (typeof unitValue !== "string") {
      throw new Error(
        "[ethjs-unit] the unit provided " +
          decimals +
          " doesn't exists, please use the one of the following units " +
          JSON.stringify(unitValue, null, 2)
      );
    }

    return new BN(unitValue, 10);
  };

  export const numberToString = (arg: any): string => {
    if (typeof arg === "string") {
      if (!arg.match(/^-?[0-9.]+$/)) {
        throw new Error(
          "while converting number to string, invalid number value '" +
            arg +
            "', should be a number matching (^-?[0-9.]+)."
        );
      }
      return arg;
    } else if (typeof arg === "number") {
      return String(arg);
    } else if (
      typeof arg === "object" &&
      arg.toString &&
      (arg.toTwos || arg.dividedToIntegerBy)
    ) {
      if (arg.toPrecision) {
        return String(arg.toPrecision());
      } else {
        // eslint-disable-line
        return arg.toString(10);
      }
    }
    throw new Error(
      "while converting number to string, invalid number value '" +
        arg +
        "' type " +
        typeof arg +
        "."
    );
  };

  export const toWei = (decimals: string): string => {
    switch (decimals) {
      case "1":
        return "wei";
      case "3":
        return "Kwei";
      case "6":
        return "mwei";
      case "9":
        return "gwei";
      case "12":
        return "szabo";
      case "18":
        return "ether";
      case "21":
        return "kether";
      case "24":
        return "mether";
      case "27":
        return "gether";
      case "30":
        return "tether";
      default:
        return "ether";
    }
  };

  export const getEtherBalance = async (
    web3: any,
    address: string
  ): Promise<number> => {
    return +web3.utils.fromWei(await web3.eth.getBalance(address), "ether");
  };

  export const validateAddress = (address: string, token: string): boolean => {
    var valid = WAValidator.validate(address, token);
    if (valid) {
      return valid;
    } else {
      return valid;
    }
  };

  export const truncateAddress = (address: string) => {
    if (!address) return "No Account";
    const match = address.match(
      /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
    );
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };

  export const truncateEthAddress = (
    address: string,
    length: number = 6
  ): string => {
    // Check if the address is shorter than the expected length for an Ethereum address
    if (address.length < 2 + length * 2) {
      throw new Error("Address too short to truncate");
    }

    // Check for '0x' prefix
    if (address.substring(0, 2) !== "0x") {
      throw new Error("Invalid Ethereum address");
    }

    return `${address.substring(0, 2 + length)}...${address.substring(
      address.length - length
    )}`;
  };

  export const formatEtherValue = (etherString: string): string => {
    // Convert the ether string to a BigNumber
    const etherAmount = ethers.utils.parseEther(etherString);

    // Define thresholds
    const billion = ethers.utils.parseUnits("1", 27); // 1 billion wei
    const million = ethers.utils.parseUnits("1", 24); // 1 million wei

    // Format the value
    if (etherAmount.gte(billion)) {
      // If it's in billions, convert to billions and fix to 2 decimal places
      return `${parseFloat(ethers.utils.formatUnits(etherAmount, 27)).toFixed(
        2
      )}B`;
    } else if (etherAmount.gte(million)) {
      // If it's in millions, convert to millions and fix to 2 decimal places
      return `${parseFloat(ethers.utils.formatUnits(etherAmount, 24)).toFixed(
        2
      )}M`;
    } else {
      // For less than a million, just show in ether with 2 decimal places
      return `${parseFloat(ethers.utils.formatEther(etherAmount)).toFixed(2)}`;
    }
  };
}

export default BLockchainUtils;
