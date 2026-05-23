import { useState } from "react";

const useTokenMetadata = () => {
  const [tokens, setTokens] = useState<any[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
  const current_chain = "0x15b32"; // CHZ testnet chain ID

  const fetchTokenMetadata = async (token_address_list: string[]) => {
    try {
      const baseUrl = `https://deep-index.moralis.io/api/v2.2/erc20/metadata?chain=${current_chain}`;

      let fullUrl = baseUrl;
      token_address_list.forEach((address, index) => {
        const addressParam = `&addresses%5B${index}%5D=${address}`;
        fullUrl += addressParam;
      });

      const response = await fetch(fullUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-API-Key": `${apiKey}`,
        },
      });

      const data = await response.json();
      setTokens(data);

    } catch (error) {
      console.error("Error fetching token metadata:", error);
    }
  };

  return { tokens, fetchTokenMetadata };
};

export default useTokenMetadata;