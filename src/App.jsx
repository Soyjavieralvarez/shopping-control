import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filters from './components/Filters';
import ListExpenses from './components/ListExpenses';
import Modal from './components/Modal';
import { generateId } from './helpers';
import newExpenseIcon from './assets/img/nuevo-gasto.svg'



function App() {
  
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState (false)
  const [editExpense, setEditExpense] = useState({})

  const [filter, setFilter] = useState('')
  const [leakedExpenses, setLeakedExpenses] = useState([])
  
  useEffect(() => {
    if( Object.keys(editExpense).length > 0 ) {
      setModal(true)

      setTimeout(() => {
      setAnimateModal(true)
      },500);
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem('budget', budget) ?? 0
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses)?? []);
    
  }, [expenses]);

  useEffect (() =>{
    if(filter) {
      //filter expenses by categories
      const filtersExpenses = expenses.filter(expense => expense.category === filter)
      setLeakedExpenses(filtersExpenses)
    }
  }, [filter]);

  useEffect (() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, []);

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
    setExpenses={setExpenses}
    budget={budget}
    setBudget={setBudget}
    isValidBudget={isValidBudget}
    setIsValidBudget={setIsValidBudget}
    />


     {isValidBudget && (
      <>
      <main>
      <Filters 
          filter={filter}
          setFilter={setFilter}
      />
        <ListExpenses 
          expenses={expenses}
          setEditExpense={setEditExpense}
          eliminateExpense={eliminateExpense}
          filter={filter}
          leakedExpenses={leakedExpenses}
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
