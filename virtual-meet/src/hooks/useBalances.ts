import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const useBalances = () => {
  const { address } = useAppContext();
  const [tokenBalances, setTokenBalances] = useState<any[]>([]);
  const [nativeBalance, setNativeBalance] = useState<any>(null);

  const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
  const current_chain = "0x15b32";

  const fetchBalances = async () => {
    try {
      const token_balances = await fetch(
        `https://deep-index.moralis.io/api/v2.2/${address}/erc20?` +
          new URLSearchParams({ chain: current_chain }),
        {
          method: "get",
          headers: {
            accept: "application/json",
            "X-API-Key": `${apiKey}`,
          },
        }
      );
      const tokens = await token_balances.json();
      setTokenBalances(tokens);

      const native_balance = await fetch(
        `https://deep-index.moralis.io/api/v2.2/${address}/balance?` +
          new URLSearchParams({ chain: current_chain }),
        {
          method: "get",
          headers: {
            accept: "application/json",
            "X-API-Key": `${apiKey}`,
          },
        }
      );
      const native = await native_balance.json();
      setNativeBalance(native);

    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  };

  return { tokenBalances, nativeBalance, fetchBalances };
};

export default useBalances;