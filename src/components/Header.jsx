import React from "react";
import NewBudget from "./NewBudget";
import ControlBudget from "./ControlBudget";
import logo from '../assets/img/logo-shopping.png'


const Header = ({ 
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget }) => {
  return (
    <header className="header-box">
    <img className='logo-shopping'
  src={logo}
  alt="logo de la empresa"
  />
      <h1>Planificador de gastos</h1>

      {isValidBudget ? (
        <ControlBudget
        budget={budget}
         />
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
