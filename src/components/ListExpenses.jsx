import React from 'react'
import Expense from './Expense'

const ListExpenses = ({expenses, setEditExpense, eliminateExpense}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Gastos' : 'Aún no hay gastos'}</h2>

        {expenses.map( expense => (
            <Expense 
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                eliminateExpense={eliminateExpense}
            />
        )) }
    
        
    </div>
  )
}

export default ListExpenses