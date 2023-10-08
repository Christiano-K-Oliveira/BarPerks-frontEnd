import { Input } from "./style"
import { iInputAdmin, iInputUser } from "../../../interfaces/inscricao/inscricao.interface";
import { iInputLogin } from "../../../interfaces/login/login.interface";

const InputRegisterAdmin = ({ id, type, placeholder, register, name }: iInputAdmin ) => {
    return (
            <Input id={id} type={type} placeholder={placeholder} { ...register(`${name}`) }/>
    )
}

const InputRegisterUser = ({ id, type, placeholder, register, name }: iInputUser ) => {
    return (
            <Input id={id} type={type} placeholder={placeholder} { ...register(`${name}`) }/>
    )
}

const InputLogin = ({ id, type, placeholder, register, name }: iInputLogin ) => {
    return (
            <Input id={id} type={type} placeholder={placeholder} { ...register(`${name}`) }/>
    )
}

export { InputRegisterAdmin, InputRegisterUser, InputLogin }