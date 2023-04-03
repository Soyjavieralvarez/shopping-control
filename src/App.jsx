import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import newExpenseIcon from './assets/img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)
  }
  return (
   <div>
    <Header
    budget={budget}
    setBudget={setBudget}
    isValidBudget={isValidBudget}
    setIsValidBudget={setIsValidBudget}
    />


     {isValidBudget && (
    <div className='nuevo-gasto'>
      <img
      src={newExpenseIcon}
      alt="icono de nuevo gasto"
      onClick={handleNewExpense}
       />
    </div>
    )}

    {modal && <Modal
     setModal={setModal}
      
     />}
   </div>
  )
}

export default App
