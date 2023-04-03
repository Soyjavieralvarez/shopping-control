import React from "react";

import NewBudget from "./NewBudget";

const Header = ({ 
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidBudget ? (
        <p>Control de presupuesto</p>
      ): (
        <NewBudget
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
      />
      )}

      
    </header>
  );
};

export default Header;
