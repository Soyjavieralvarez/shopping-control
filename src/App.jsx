import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses';
import Modal from './components/Modal';
import { generateId } from './helpers';
import newExpenseIcon from './assets/img/nuevo-gasto.svg'


function App() {
  
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState (false)
  const [editExpense, setEditExpense] = useState({})
  
  useEffect(() => {
    if( Object.keys(editExpense).length > 0 ) {
      setModal(true)

      setTimeout(() => {
      setAnimateModal(true)
      },500);
    }
  }, [editExpense])

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true)
    },500);
  }

  const saveExpense = expense =>{
        if(expense.id) {
          //update
          const updateExpenses = expenses.map( expenseState =>  expenseState.id === 
          expense.id ? expense : expenseState)
          setExpenses(updateExpenses)
          setEditExpense({})
        }else {
          //New expense
          expense.id = generateId();
          expense.date = Date.now();
          setExpenses([...expenses, expense])
        }
          setAnimateModal(false)
          setTimeout(() => {
            setModal(false)
          }, 1000);
  }

  const eliminateExpense = id => {
    const updateExpenses = expenses.filter(expense => expense.id !== id);

    setExpenses(updateExpenses)
  }


  return (
   <div className={modal ? 'fijar' : ''}>
    <Header
    expenses={expenses}
    budget={budget}
    setBudget={setBudget}
    isValidBudget={isValidBudget}
    setIsValidBudget={setIsValidBudget}
    />


     {isValidBudget && (
      <>
      <main>
        <ListExpenses 
          expenses={expenses}
          setEditExpense={setEditExpense}
          eliminateExpense={eliminateExpense}
        />
      </main>
    <div className='nuevo-gasto'>
      <img
      src={newExpenseIcon}
      alt="icono de nuevo gasto"
      onClick={handleNewExpense}
       />
    </div>
    </>
    )}

      {modal && <Modal
      setModal={setModal}
      animateModal={animateModal}
      saveExpense={saveExpense}
      editExpense={editExpense}
      setEditExpense={setEditExpense}
      />}
   </div>
  )
}

export default App
