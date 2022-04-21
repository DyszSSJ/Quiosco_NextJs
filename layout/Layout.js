import Head from "next/head";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import SideBar from "../components/SideBar";
import Pasos from "../components/Pasos";
import ModalProducto from "../components/ModalProducto";
import useQuiosco from "../hooks/useQuiosco";

import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

const Layout = ({ children, paginas }) => {
  const { modal } = useQuiosco()
  return (
    <>
      <Head>
        <title>Café - {paginas}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <SideBar>Side bar</SideBar>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll ">
          <div className="p-10">
            <Pasos/>
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles} >
          <ModalProducto />
        </Modal>
      )}

      <ToastContainer
        autoClose={5000}
        theme='colored'
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
