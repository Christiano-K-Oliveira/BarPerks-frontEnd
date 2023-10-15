import { iInputFormRegisterClient, iInputFormSearchClient, iInputRegisterProduct, iInputUserEdit, iInputUserRegisterPoints } from "../../../interfaces/user/user.interface"
import { DivInfo, DivInputCalculate, IconQuest, Input, InputEdit } from "./style"

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

const InputCalculatePoints = () => {
    return (
        <>
        <DivInputCalculate>
            <Input type="text" placeholder="Valor Gasto"/>
            <button type="button">
                <IconQuest size="20px"/>
            </button>

        </DivInputCalculate>
        <DivInfo>
            <p>A soma dos pontos é realizada através da soma de valores cheios. Ex: 20, 30, 50...</p>
        </DivInfo>
        </>
    )
}

export { 
    InputUser, 
    InputUserRegisterPoints, 
    InputUserRegisterProduct,
    InputUserRegisterClient,
    InputUserSearchClient,
    InputCalculatePoints,
}