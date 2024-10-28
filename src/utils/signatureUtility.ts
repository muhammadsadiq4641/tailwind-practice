import { Signer, providers } from "ethers";
namespace SignUtils {
  export const signMessage = async (
    provider: providers.Web3Provider,
    signer: Signer
  ) => {
    try {
      const signer = provider.getSigner();
      const message: string =
        "Welcome! By signing this message, you accept the Terms & Conditions.";
      const signature: string = await signer.signMessage(message);
      console.log("Signed Message:", signature);
      alert("Thank you for accepting the Terms & Conditions.");
    } catch (error: any) {
      console.log("error ", error);
    }
  };
}
export default SignUtils;
