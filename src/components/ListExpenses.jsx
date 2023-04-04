import React from 'react'
import Expense from './Expense'

const ListExpenses = ({expenses}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Gastos' : 'Aún no hay gastos'}</h2>

        {expenses.map( expense => (
            <Expense 
                key={expense.id}
                expense={expense}
            />
        )) }
    
        
    </div>
  )
}

export default ListExpenses