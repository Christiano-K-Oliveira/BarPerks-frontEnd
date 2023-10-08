import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionRegisterProducts } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserRegisterProductPage = () => {
    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionRegisterProducts/>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserRegisterProductPage