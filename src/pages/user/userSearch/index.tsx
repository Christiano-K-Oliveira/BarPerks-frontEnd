import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionSearchUser } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserSearchClientPage = () => {
    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionSearchUser/>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserSearchClientPage