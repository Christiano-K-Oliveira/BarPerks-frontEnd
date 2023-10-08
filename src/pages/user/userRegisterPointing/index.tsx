import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionRegisterPoints } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserRegisterPoitingPage = () => {
    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionRegisterPoints/>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserRegisterPoitingPage