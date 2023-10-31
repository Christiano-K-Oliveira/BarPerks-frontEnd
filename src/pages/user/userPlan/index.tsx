import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser"
import { SectionUserPlan } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserPlan = () => {
    return (
        <>
            <HeaderUserAdmin/>

            <Main>
                <SectionUserPlan/>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserPlan