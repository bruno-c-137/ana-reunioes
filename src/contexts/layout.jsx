import React, { useState, useContext, createContext } from "react";

const layoutContext = createContext();

export function ProvideLayout({ children }) {
  const layout = useProvideLayout();
  return (
    <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>
  );
}

export const useLayout = () => {
  return useContext(layoutContext);
};

function useProvideLayout() {
  const [navOpen, setnavOpen] = useState(false);

  return {
    navOpen,
    setnavOpen,
  };
}
