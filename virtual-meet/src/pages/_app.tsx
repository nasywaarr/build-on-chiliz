import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppContextProvider } from "@/context/AppContext";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </WagmiConfig>
  );
}