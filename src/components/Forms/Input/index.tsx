import { Input } from "./style"
import { iInput } from "../../../interfaces/inscricao/inscricao.interface";
import { iInputLogin } from "../../../interfaces/login/login.interface";

const InputForm = ({ id, type, placeholder, register, name }: iInput ) => {
    return (
            <Input id={id} type={type} placeholder={placeholder} { ...register(`${name}`) }/>
    )
}

const InputLogin = ({ id, type, placeholder, register, name }: iInputLogin ) => {
    return (
            <Input id={id} type={type} placeholder={placeholder} { ...register(`${name}`) }/>
    )
}

export { InputForm, InputLogin }