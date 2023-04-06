import React from 'react'
import Expense from './Expense'

const ListExpenses = ({
    expenses,
    setEditExpense,
    eliminateExpense,
    filter,
    leakedExpenses
  }) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Gastos' : 'Aún no hay gastos'}</h2>

        {filter ? (
            leakedExpenses.map( expense => (
            <Expense 
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                eliminateExpense={eliminateExpense}
            />
        )) 
          ) : (
            expenses.map( expense => (
            <Expense 
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                eliminateExpense={eliminateExpense}
            />
        ))
          ) 
        }
    
    </div>
  )
}

export default ListExpenses