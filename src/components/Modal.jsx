import { useState, useEffect } from 'react'
import Message from './Message'
import closeIcon from '../assets/img/cerrar.svg'

const Modal = ({
      setModal,
      animateModal,
      setAnimateModal,
      saveExpense,
      editExpense,
      setEditExpense
    }) => {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [id, setID] = useState('')

      useEffect(() => {
        if( Object.keys(editExpense).length > 0 ) {
          setName(editExpense.name)
          setQuantity(editExpense.quantity)
          setCategory(editExpense.category)
          setID(editExpense.id)
          setDate(editExpense.date)
        }
      }, [])

    const maskModal = () => {
        
        // setAnimateModal(false)
        setAnimateModal({})

        setTimeout(() => {
          setModal(false)
        }, 500);
    }
    const handleSubmit = e => {
      e.preventDefault();

      if ([ name, quantity, category, ].includes('')) {
        setMessage('Todos los campos son obligatorios')
        setTimeout(() => {
          setMessage('')
        }, 3000);
        return;
       
      }
      saveExpense({name, quantity, category, id, date})
    }
  return (
    <div className="modal">
       <div className="cerrar-modal">
       <img
       src={closeIcon}
       alt="icono de cierre"
       onClick={maskModal} 
        />
       </div>

       <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" :"cerrar"} `}
        >
        <legend>{editExpense.name ? "Editar gasto" : "Nuevo gasto"}</legend>
        {message && <Message tipo="error">{message}</Message>}

        <div className='campo'>
          <label htmlFor='nombre'>Tipo de gasto:</label>
          <input
          id="nombre"
          type="text"
          placeholder='Añade el nombre del gasto'
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Precio:</label>
          <input
          id="cantidad"
          type="number"
          placeholder='Añade la cantidad del gasto: ej. 10€'
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
              <label htmlFor='cantegoría'>Cantegoría:</label>
              <select
              id="categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
              >
              <option value="">---Selecciona la categoría---</option>
              <option value="carniceria">Carnicería</option>
              <option value="charcuteria">Charcutería</option>
              <option value="pescaderia">Pescadería</option>
              <option value="fruteria">Frutas y verduras</option>
              <option value="precocinado">Cocina precocinada</option>
              <option value="despensa">Despensa</option>
              <option value="bebidas">Bebidas y bodega</option>
              <option value="congelados">Congelados</option>
              <option value="panaderia">Panadería y horno</option>
              <option value="mascota">Mascotas</option>
              <option value="bebe">Bebé</option>
              <option value="hogar">Cuidado del hogar</option>
              <option value="personal">Cuidado personal</option>
              <option value="otros">Otros</option>
          </select>
        </div>
        <input
          type="submit"
          value={editExpense.name ? "Guardar cambios" : "Añadir gasto"}
        />
       </form>
    </div>
  )
}

export default Modal