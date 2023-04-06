import { useState, useEffect } from 'react'

const Filters = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar gastos</label>
                <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
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
        </form>
    </div>
  )
}

export default Filters