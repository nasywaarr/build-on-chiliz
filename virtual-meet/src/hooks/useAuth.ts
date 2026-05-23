import { useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useAppContext } from "@/context/AppContext";

const useAuthentication = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { setAddress, setIsConnected } = useAppContext();

  useEffect(() => {
    setAddress(address || "");
    setIsConnected(isConnected);
  }, [address, isConnected]);

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error(error);
    }
  };

  return { address, isConnected, handleConnect, handleDisconnect };
};

export default useAuthentication;