import { useContext } from "react"
import { ClientContext } from "../../contexts/clienteContext"
import { Navigate, Outlet } from "react-router-dom"
import { AdminContext } from "../../contexts/administradorContext"

const ProtectedRoutesClient = () => {
    const { cookies, clientAuthLogin } = useContext(ClientContext)
    const token = cookies["token"]

    if(token) {
        clientAuthLogin(token)

        return <Outlet/>
    }
    else{
        return <Navigate to={"/"}/>
    }

}

const ProtectedRoutesAdmin = () => {
    const { cookies, adminAuthLogin } = useContext(AdminContext)
    const token = cookies["token"]

    if(token) {
        adminAuthLogin(token)
    
        return <Outlet/>
    }
    else{
        return <Navigate to={"/"}/>
    }
}

export { ProtectedRoutesClient, ProtectedRoutesAdmin }