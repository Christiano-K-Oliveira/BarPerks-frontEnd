import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUser, HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionUserAdminEdit, SectionUserEdit } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserAdminEditPage = () => {
    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionUserAdminEdit/>
            </Main>

            <FooterUser/>
        </>
    )
}

const UserEditPage = () => {
    return (
        <>
            <HeaderUser/>

            <Main>
                <SectionUserEdit/>
            </Main>

            <FooterUser/>
        </>
    )
}


export { UserAdminEditPage, UserEditPage }