import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SectionPlans from "../../components/SectionPlans"
import { Main } from "./style"

const PlanosPage = () => {
    return (
        <>
            <Header/>

            <Main>
                <SectionPlans/>
            </Main>

            <Footer/>
        </>
    )
}

export default PlanosPage