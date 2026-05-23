import { useEffect } from "react";
import useBalances from "@/hooks/useBalances";
import TokenCard from "@/components/TokenCard";

export default function Balances() {
  const { tokenBalances, nativeBalance, fetchBalances } = useBalances();

  useEffect(() => {
    fetchBalances();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Balances</h1>

      {!tokenBalances ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="mb-4">
            Native Balance: {nativeBalance?.balance ?? "0"}
          </p>
          {tokenBalances.map((token: any, i: number) => (
            <TokenCard
              key={i}
              symbol={token.symbol}
              balance={token.balance}
              address={token.token_address}
              logo={token.logo}
            />
          ))}
        </>
      )}
    </div>
  );
}