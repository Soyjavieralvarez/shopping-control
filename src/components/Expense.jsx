import React from 'react'
import { formatDate } from '../helpers';

import IconBath from '../assets/img/IconBath.svg'
import IconBread from '../assets/img/IconBread.svg'
import IconDogBowl from '../assets/img/IconDogBowl.svg'
import IconFish from '../assets/img/IconFish.svg'
import IconFruit from '../assets/img/IconFruit.svg'
import IconGlassFull from '../assets/img/IconGlassFull.svg'
import IconIceCream from '../assets/img/IconIceCream.svg'
import IconMoodKids from '../assets/img/IconMoodKid.svg'
import IconOthers from '../assets/img/IconOthers.svg'
import IconReceipt from '../assets/img/IconReceipt.svg'
import IconSmartHome from '../assets/img/IconSmartHome.svg'
import IconSnowFlake from '../assets/img/IconSnowFlake.svg'
import IconMeat from '../assets/img/IconMeat.svg'




const iconDictionary = {
    
          carniceria : IconMeat,
          pescaderia : IconFish,
          fruteria : IconFruit,
          precocinado : IconSnowFlake,
          despensa : IconReceipt,
          bebidas : IconGlassFull,
          congelados : IconIceCream,
          panaderia : IconBread,
          mascota : IconDogBowl,
          bebe : IconMoodKids,
          hogar : IconSmartHome,
          personal : IconBath,
          otros : IconOthers,
         
}

const Expense = ({expense}) => {
    const { category, name, quantity, id, date } = expense;
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
        <img
        src={iconDictionary[category]}
        alt="Iconos de gastos"
        />
            <div className='descripcion-gasto'>
                <p className='categoria'>{category}</p>
                <p className='nombre-gasto'>{name}</p>
                <p className='fecha-gasto'>
                    Gasto realizado el: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
        </div>
        <p className='cantidad-gasto'>{quantity}€</p>
    </div>
  )
}

export default Expense