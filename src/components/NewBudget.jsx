import {useState} from 'react'
import Message from './Message'

const NewBudget = ({
    budget,
    setBudget,
    setIsValidBudget}) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault();
        if(!budget || budget < 0) {
            setMessage('Debes añadir un presupuesto válido')
            return 
        } 
        setMessage('')
        setIsValidBudget(true)
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleBudget} className='formulario'>
        <div className='campo'>
            <label>Definir presupuesto</label>
            <input
                className='nuevo-presupuesto'
                type='number'
                placeholder='Añade tu presupuesto'
                value={budget}
                onChange={e => setBudget(Number(e.target.value))}
            />
        </div>
        <input type='submit' value='Añadir'/>

        {message && <Message tipo='error'>{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget