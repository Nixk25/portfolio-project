"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Definování typu pro context hodnotu
interface AppContextType {
  isBlackBg: boolean;
  setIsBlackBg: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isBlackBg, setIsBlackBg] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isBlackBg, setIsBlackBg }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook pro použití contextu s kontrolou null/undefined
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
