import { useEffect, useState } from "react";
import useBalances from "@/hooks/useBalances";

// The fan token address we require
const REQUIRED_FAN_TOKEN = "0xF9C0F80a6c67b1B39bdDF00ecD57f2533ef5b688";

const formatBalance = (balance: string, decimals: number = 18) => {
  return Number(balance) / Math.pow(10, decimals);
};

export default function Meet() {
  const { tokenBalances, nativeBalance, fetchBalances } = useBalances();
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    fetchBalances();
  }, []);

  useEffect(() => {
    if (!nativeBalance || !tokenBalances) return;

    // Check native balance
    const hasNative = formatBalance(nativeBalance.balance ?? "0") > 1;

    // Check if user holds the required fan token
    const fanToken = tokenBalances.find(
      (token: any) =>
        token.token_address?.toLowerCase() === REQUIRED_FAN_TOKEN.toLowerCase()
    );
    const hasFanToken =
      fanToken && formatBalance(fanToken.balance) > 1;

    setEligible(hasNative && !!hasFanToken);
  }, [nativeBalance, tokenBalances]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Meet</h1>

      {!nativeBalance ? (
        <p>Checking eligibility...</p>
      ) : eligible ? (
        <div className="text-center">
          <p className="text-green-600 font-bold">Access Granted!</p>
          <p className="text-4xl mt-4">⏳ Coming Soon...</p>
        </div>
      ) : (
        <div className="text-center text-red-600">
          <p className="font-bold">Access Denied.</p>
          <p className="text-sm mt-2">You need CHZ and the required fan token to enter.</p>
        </div>
      )}
    </div>
  );
}