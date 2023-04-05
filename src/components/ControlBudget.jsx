import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({expenses, budget}) => {
    const [percentage, setPercentage] = useState(0)
    const [available, setavailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect (() => {
        const totalSpent = expenses.reduce( (total, spent) => spent.quantity + total, 0 );
        const totalAvailable = budget - totalSpent;

        //Calculate the percentage expenses
        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);
        
        setavailable(totalAvailable)
        setSpent(totalSpent);
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1000);
    }, [expenses])

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('es-US', {
            style:'currency',
            currency:'EUR'})
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
           <CircularProgressbar
                styles={buildStyles({
                    pathColor:'#33a3ba',
                    trailColor: '#e6e6e6',
                    pathTransitionDuration : 1,
                    textColor:'#33a3ba'
                })}
                value={percentage}
                text={`${percentage}% Gastado`}
           />
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