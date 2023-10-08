import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SectionAbout from "../../components/SectionAbout"
import { Main } from "./style"

const SobrePage = () => {
    return (
        <>
            <Header/>

            <Main>
                <SectionAbout/>
            </Main>

            <Footer/>
        </>
    )
}

export default SobrePage