import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUser } from "../../../components/Header/HeaderUser"
import { SectionRedeemReward } from "../../../components/SectionsUser"
import { Main } from "../style"

const UserRedeemRewardPage = () => {
    return (
        <>
            <HeaderUser/>

            <Main>
                <SectionRedeemReward/>           
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserRedeemRewardPage