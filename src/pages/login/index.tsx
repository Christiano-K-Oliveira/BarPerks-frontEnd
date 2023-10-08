import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SectionOptions from "../../components/SectionOptions"
import { Main } from "./style"

const LoginPage = () => {

    return (
        <>
            <Header/>
                <Main>
                    <SectionOptions 
                        title="Login" 
                        optionOne="Cliente" 
                        optionTwo="Administrador" 
                        linkOne="/login-cliente" 
                        linkTwo="/login-administrador"
                    />
                </Main>
            <Footer/>
        </>
    )
}

export default LoginPage