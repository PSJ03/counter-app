import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const contractAddress = "0x314AA91a71d707cD5168493b394be7a408284De7";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
