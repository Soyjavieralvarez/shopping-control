import React from 'react'

const ControlBudget = ({budget}) => {

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
                <span>Disponible:</span>{formatQuantity(0)}
            </p>

            <p>
                <span>Gastado:</span>{formatQuantity(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget