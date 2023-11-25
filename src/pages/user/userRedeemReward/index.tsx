import { useContext } from "react"
import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUser } from "../../../components/Header/HeaderUser"
import { SectionRedeemReward } from "../../../components/SectionsUser"
import { Main } from "../style"
import { ClientContext } from "../../../contexts/clienteContext"
import ModalConfReward from "../../../components/Modals/ModalConfReward"

const UserRedeemRewardPage = () => {
    const { modalConfReward } = useContext(ClientContext)

    return (
        <>
            <HeaderUser/>

            <Main>
                <SectionRedeemReward/>           
            </Main>

            <FooterUser/>

            { modalConfReward ? <ModalConfReward/>: null }
        </>
    )
}

export default UserRedeemRewardPage