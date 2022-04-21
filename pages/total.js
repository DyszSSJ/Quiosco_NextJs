import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";
import { formatearDinero } from "../helpers";

const Total = () => {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3;
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido])

  return (
    <Layout paginas={"Total y Confirmar tu Pedido"}>
      <h1 className="text-4xl font-black">Total y Confirmar tu Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre:
          </label>

          <input
            id="nombre"
            type="text"
            className="bg-gray-300 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold text-amber-500">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-4">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;
