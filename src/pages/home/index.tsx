import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SectionPrograms from "../../components/SectionPrograms"
import SectionSlogan from "../../components/SectionSlogan"
import SectionStart from "../../components/SectionStart"
import { Main } from "./style"

const HomePage = () => {
    return (
        <>
            <Header/>

            <Main>
                <SectionStart/>
                <SectionSlogan/>
                <SectionPrograms/>
            </Main>

            <Footer/>
        </>
    )
}

export default HomePage