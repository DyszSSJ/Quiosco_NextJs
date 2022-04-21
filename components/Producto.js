import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

const Producto = ({producto}) => {
    const { imagen, precio, nombre } = producto
    const { handleSetProducto, handleChangeModal } = useQuiosco()
  return (
    <div className='border p-3'>
        <Image
            width={400}
            height={500}
            src={`/img/${imagen}.jpg`}
            alt={`Imagen Platillo ${nombre}`}
        />
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>
                {formatearDinero(precio)}
            </p>
            <buttton
                type='submit'
                className='bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer text-white w-full mt-5 p-3 uppercase font-bold text-center'
                onClick={() =>{
                    handleSetProducto(producto)
                    handleChangeModal()
                }}
            >
                Agregar
            </buttton>
        </div>
    </div>
  )
}

export default Producto
