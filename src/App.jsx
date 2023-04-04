import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import newExpenseIcon from './assets/img/nuevo-gasto.svg'


function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState (false)
  const [expenses, setExpenses] = useState([])

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    },500);
  }

  const saveExpense = expense =>{
    console.log(expense);
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
     animateModal={animateModal}
     saveExpense={saveExpense}

     />}
   </div>
  )
}

export default App
