import { useEffect } from "react";
import useTokenMetadata from "@/hooks/useTokenMetadata";

// Replace with real CHZ token addresses
const TOKEN_ADDRESSES = [
  "0xTokenAddress1",
  "0xTokenAddress2",
];

export default function FunTokens() {
  const { tokens, fetchTokenMetadata } = useTokenMetadata();

  useEffect(() => {
    fetchTokenMetadata(TOKEN_ADDRESSES);
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Fun Tokens</h1>

      {!tokens || tokens.length === 0 ? (
        <p>Loading...</p>
      ) : (
        tokens.map((token: any, i: number) => (
          <div key={i} className="border rounded-lg p-4 m-2">
            <div className="flex items-center gap-4">
              {token.logo && (
                <img src={token.logo} alt={token.symbol} className="w-10 h-10 rounded-full" />
              )}
              <div>
                <p className="font-bold">{token.symbol ?? "Unknown"}</p>
                <p className="text-sm text-gray-500">{token.address ?? "N/A"}</p>
                <p>Decimals: {token.decimals ?? "N/A"}</p>
                <p>Possible Scam: {token.possible_spam ? "⚠️ Yes" : "✅ No"}</p>
                <p>Verified: {token.verified_collection ? "✅ Yes" : "❌ No"}</p>
                <p>Created: {formatDate(token.created_at)}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}