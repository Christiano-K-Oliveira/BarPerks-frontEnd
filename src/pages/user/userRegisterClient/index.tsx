import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionRegisterClient } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserRegisterClientPage = () => {
    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionRegisterClient/>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserRegisterClientPage