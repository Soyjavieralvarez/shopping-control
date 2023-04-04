import { useState } from 'react'
import closeIcon from '../assets/img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')



    const maskModal = () => {
        
        // setAnimateModal(false)

        setTimeout(() => {
          setModal(false)
        }, 500);
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

       <form className={`formulario ${animateModal ? "animar" :"cerrar"} `}>
        <legend>Nuevo gasto</legend>

        <div className='campo'>
          <label htmlFor='nombre'>Tipo de gasto</label>
          <input
          id="nombre"
          type="text"
          placeholder='Añade el nombre del gasto'
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
          id="cantidad"
          type="number"
          placeholder='Añade la cantidad del gasto: ej. 10€'
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantegoría'>Cantegoría</label>
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
          value="añadir gasto"
        />
       </form>
    </div>
  )
}

export default Modal