import { useContext } from "react"
import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionSearchUser } from "../../../components/SectionsUser"
import { AdminContext } from "../../../contexts/administradorContext"
import { Main } from "../style"
import { ModalUpdateRegisterClient } from "../../../components/Modals/ModalEditRegisterClient"

const UserSearchClientPage = () => {
    const { modalEditRegisterClient } = useContext(AdminContext)

    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionSearchUser/>
            </Main>

            <FooterUser/>

            { modalEditRegisterClient ? <ModalUpdateRegisterClient/> : null }
        </>
    )
}

export default UserSearchClientPage