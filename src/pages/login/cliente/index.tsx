import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import SectionLogin from "../../../components/SectionLogin"
import { iTitleLogin } from "../../../interfaces/login/login.interface"
import { Main } from "../style"

const LoginClientePage = ({ title }: iTitleLogin) => {
    return (
        <>
            <Header/>

            <Main>
                <SectionLogin title={title}/>
            </Main>

            <Footer/>
        </>
    )
}

export default LoginClientePage