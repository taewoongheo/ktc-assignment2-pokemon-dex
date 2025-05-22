import { createContext, useContext, useState } from "react";

const DashboardContext = createContext({
  selectedPokemon: [],
  setSelectedPokemon: () => {},
});

export const DashboardProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <DashboardContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("dashboard context error");
  return context;
};
