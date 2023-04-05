import { useState, useEffect } from 'react'

const ControlBudget = ({expenses, budget}) => {

    const [available, setavailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect (() => {
        const totalSpent = expenses.reduce( (total, spent) => spent.quantity + total, 0 );
       
        const totalAvailable = budget - totalSpent;

        
        setavailable(totalAvailable)
        setSpent(totalSpent);
    }, [expenses])

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('es-US', {
            style:'currency',
            currency:'EUR'})
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto:</span>{formatQuantity(budget)}
            </p>

            <p>
                <span>Disponible:</span>{formatQuantity(available)}
            </p>

            <p>
                <span>Gastado:</span>{formatQuantity(spent)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget