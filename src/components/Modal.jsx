import { useState } from "react"
import closeIcon from '../assets/img/cerrar.svg'

const Modal = ({setModal}) => {

    const maskModal = () => {
        setModal(false)
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
    </div>
  )
}

export default Modal