import { useContext } from "react"
import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionSearchUser } from "../../../components/SectionsUser"
import { AdminContext } from "../../../contexts/administradorContext"
import { Main } from "../style"
import { ModalUpdateRegisterClient } from "../../../components/Modals/ModalEditRegisterClient"
import { ModalListRegisterClient } from "../../../components/Modals/ModalListRegisterClient"
import { ModalRescueRewards } from "../../../components/Modals/ModalListRewards"

const UserSearchClientPage = () => {
    const { modalEditRegisterClient, modalListRegisterClient, modalRescueRewards } = useContext(AdminContext)

    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionSearchUser/>
            </Main>

            <FooterUser/>

            { modalEditRegisterClient ? <ModalUpdateRegisterClient/> : null }
            { modalListRegisterClient ? <ModalListRegisterClient/> : null }
            { modalRescueRewards ? <ModalRescueRewards/> : null }
        </>
    )
}

export default UserSearchClientPage