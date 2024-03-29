import Image from "next/image"
import useQuiosco from '../hooks/useQuiosco'
import Categoria from "./Categoria"

const SideBar = () => {
    const {categorias}  = useQuiosco();
  return (
    <>
      <Image
        width={300}
        height={100}
        src='/img/logo.svg'
        alt="Imagen Logotipo"
      />

      <nav className="mt-10">
        {categorias.map( categoria => (
            <Categoria
                key={categoria.id}
                categoria={categoria}
            />
        ))}
      </nav>
    </>
  )
}

export default SideBar
