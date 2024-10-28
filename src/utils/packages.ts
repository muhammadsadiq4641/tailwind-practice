import { create } from "ipfs-http-client";
import Papa from "papaparse";
import BlockchainConstants from "./../constants/blockchain";

namespace PackagesUtils {
  export const ipfsClient = async (file: File): Promise<string> => {
    try {
      const client = await create({
        url: BlockchainConstants.Ipfs.ADDRESS
      });
      const result = await client.add(file);
      const url = `${BlockchainConstants.Ipfs.PATH}/${result.path}`;
      return url;
    } catch (error :any) {
      console.log(error, "ipfsError");
      return error
    }
  };

  export const csvToJson = (
    event: React.ChangeEvent<HTMLInputElement>,
    setJson: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const files: FileList = event.target.files;
      if (files) {
        Papa.parse(files[0], {
          complete: (results) => {
            setJson(results.data);
          },
          header: true,
          skipEmptyLines: true,
        });
      }
    }
  };

 
}

export default PackagesUtils;
