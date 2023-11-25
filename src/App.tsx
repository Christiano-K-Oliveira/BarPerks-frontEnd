import RoutesMain from './routes'
import ClientProvider from './contexts/clienteContext'
import AdminProvider from './contexts/administradorContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: "481227944368-euu396jbn5pnafft63hn4d6rpsgqu121.apps.googleusercontent.com",
        scope: ""
      })
    }

    gapi.load('client:auth2', start)
  }, [])

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