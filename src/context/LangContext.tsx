import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context's value
interface LangContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with an undefined initial value
const LangContext = createContext<LangContextType | undefined>(undefined);

// Create a provider component
const LangProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

// Custom hook to use the LangContext
const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export { LangProvider, useLang };
