import { iInputFormRegisterClient, iInputFormSearchClient, iInputRegisterProduct, iInputUserEdit, iInputUserRegisterPoints } from "../../../interfaces/user/user.interface"
import { Input, InputEdit } from "./style"

const InputUser = ({ id, name, register, type, placeholder }: iInputUserEdit) => {
    return (
        <InputEdit id={id} type={type} placeholder={placeholder} { ...register(name) }/>
    )
}

const InputUserRegisterPoints = ({ id, name, register, type, placeholder }: iInputUserRegisterPoints) => {
    return (
        <Input id={id} type={type} placeholder={placeholder} { ...register(name) }/>
    )
}

const InputUserRegisterProduct = ({ name, register, type, placeholder }: iInputRegisterProduct) => {
    return (
        <Input type={type} placeholder={placeholder} { ...register(name) }/>
    )
}

const InputUserRegisterClient = ({ name, register, type, placeholder }: iInputFormRegisterClient) => {
    return (
        <Input type={type} placeholder={placeholder} { ...register(name) }/>
    )
}

const InputUserSearchClient = ({ name, register, type, placeholder }: iInputFormSearchClient) => {
    return (
        <Input type={type} placeholder={placeholder} { ...register(name) }/>
    )
}

export { 
    InputUser, 
    InputUserRegisterPoints, 
    InputUserRegisterProduct,
    InputUserRegisterClient,
    InputUserSearchClient
}