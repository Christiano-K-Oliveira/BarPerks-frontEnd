import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SectionOptions from "../../components/SectionOptions"
import { Main } from "./style"

const InscricaoPage = () => {
    return (
        <>
            <Header/>

                <Main>
                    <SectionOptions 
                    title="Inscreva-se" 
                    optionOne="Cliente" 
                    optionTwo="Estabelecimento"
                    linkOne="/inscricao-cliente"
                    linkTwo="/inscricao-estabelecimento"
                />
                </Main>

            <Footer/>
        </>
    )
}

export default InscricaoPage