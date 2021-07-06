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
  let [menuOpen, setmenuOpen] = useState(false);
  let [menuOpen2, setmenuOpen2] = useState(false);
  let [menuOpen3, setmenuOpen3] = useState(false);
  const [navOpen, setnavOpen] = useState(false);
  
  return {
    menuOpen,
    setmenuOpen,
    navOpen,
    setnavOpen,
    menuOpen2,
    setmenuOpen2,
    menuOpen3,
    setmenuOpen3
  };
}
