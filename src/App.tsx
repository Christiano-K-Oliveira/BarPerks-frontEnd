import RoutesMain from './routes'
import ClientProvider from './contexts/clienteContext'
import AdminProvider from './contexts/administradorContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <AdminProvider>
        <ClientProvider>
          <RoutesMain/>
        </ClientProvider>
      </AdminProvider>
    </>
  )
}

export default App