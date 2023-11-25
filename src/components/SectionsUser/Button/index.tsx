import { useContext } from "react"
import { iButton } from "../../../interfaces/user/user.interface"
import { Button, ButtonSmallStyle, ButtonDelete } from "./style"
import { AdminContext } from "../../../contexts/administradorContext"

const ButtonUserSmall = ({text, type}: iButton) => {
    return (
        <ButtonSmallStyle type={type}>{text}</ButtonSmallStyle>
    )
}

const ButtonUserSmallDelete = ({text, type}: iButton) => {
    const { excludeAdmin, adminInfo } = useContext(AdminContext)

    return (
        <ButtonDelete type={type} onClick={() => excludeAdmin(adminInfo!.id!)}>{text}</ButtonDelete>
    )
}

const ButtonUser = ({text, type, margin }: iButton) => {
    return (
        <Button style={{marginTop: `${margin}`}} type={type}>{text}</Button>
    )
}

const ButtonListRegisterClient = ({text, type, margin }: iButton) => {
    const { setModalListRegisterClient, getListClients } = useContext(AdminContext)

    return (
        <Button onClick={() => {
            getListClients()
            setModalListRegisterClient(true)
        }} style={{marginTop: `${margin}`}} type={type}>{text}</Button>
    )
}

const ButtonEditProducts = () => {
    const { setEditProductsModal } = useContext(AdminContext)

    return (
        <Button style={{marginTop: "-5px"}} type="button" onClick={() => setEditProductsModal(true)}>Editar Produtos</Button>
    )
}

export { ButtonUserSmall, ButtonUser, ButtonEditProducts, ButtonListRegisterClient, ButtonUserSmallDelete }