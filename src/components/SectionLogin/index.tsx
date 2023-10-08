import { iTitleLogin } from "../../interfaces/login/login.interface"
import { FormLogin } from "../Forms"
import TitleForm from "../Forms/Title"
import { SectionFormLogin } from "./style"

const SectionLogin = ({ title }: iTitleLogin) => {
    return (
        <SectionFormLogin>
            <TitleForm title={title}/>

            <FormLogin/>
        </SectionFormLogin>
    )
}

export default SectionLogin