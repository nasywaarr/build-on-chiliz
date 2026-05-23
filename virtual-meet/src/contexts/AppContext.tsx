import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  address: string;
  setAddress: (address: string) => void;
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  address: "",
  setAddress: () => {},
  isConnected: false,
  setIsConnected: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  return (
    <AppContext.Provider value={{ address, setAddress, isConnected, setIsConnected }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);