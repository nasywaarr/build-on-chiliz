import useAuthentication from "@/hooks/useAuthentication";

export default function Home() {
  const { address, isConnected, handleConnect, handleDisconnect } = useAuthentication();

  return (
    <div>
      {isConnected ? (
        <>
          <p>Connected: {address}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
}

import useBalances from "@/hooks/useBalances";

export default function Home() {
  const { tokenBalances, nativeBalance, fetchBalances } = useBalances();

  return (
    <div>
      <button onClick={fetchBalances}>Fetch Balances</button>
      <p>Native Balance: {nativeBalance?.balance}</p>
      <ul>
        {tokenBalances.map((token: any, i: number) => (
          <li key={i}>{token.name}: {token.balance}</li>
        ))}
      </ul>
    </div>
  );
}

import useTokenMetadata from "@/hooks/useTokenMetadata";

export default function TokenInfo() {
  const { tokens, fetchTokenMetadata } = useTokenMetadata();

  const exampleAddresses = [
    "0xTokenAddress1",
    "0xTokenAddress2",
  ];

  return (
    <div>
      <button onClick={() => fetchTokenMetadata(exampleAddresses)}>
        Fetch Token Metadata
      </button>
      <ul>
        {tokens.map((token: any, i: number) => (
          <li key={i}>
            {token.name} ({token.symbol}) - Decimals: {token.decimals}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useRouter } from "next/router";
import useAuthentication from "@/hooks/useAuthentication";

export default function Home() {
  const { isConnected, handleConnect } = useAuthentication();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Virtual Meet</h1>

      {!isConnected ? (
        <button
          onClick={handleConnect}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex flex-col gap-3 w-64">
          <button
            onClick={() => router.push("/balances")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Balances
          </button>
          <button
            onClick={() => router.push("/meet")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Mint (Meet)
          </button>
          <button
            onClick={() => router.push("/fun-tokens")}
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg"
          >
            Fun Tokens
          </button>
        </div>
      )}
    </div>
  );
}