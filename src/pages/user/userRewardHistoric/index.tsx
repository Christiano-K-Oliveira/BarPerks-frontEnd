import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUser } from "../../../components/Header/HeaderUser"
import { SectionRewardHistoric } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserRewardHistoricPage = () => {
    return (
        <>
            <HeaderUser/>

            <Main>
                <SectionRewardHistoric/>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserRewardHistoricPage