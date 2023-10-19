import { Dispatch, SetStateAction, useState } from "react"
import { iFormUserRegisterPoints, iInputFormRegisterClient, iInputFormSearchClient, iInputRegisterProduct, iInputUserEdit, iInputUserRegisterPoints } from "../../../interfaces/user/user.interface"
import { DivInputCalculate, IconQuest, Input, InputEdit } from "./style"
import { UseFormRegister } from "react-hook-form"

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

const InputCalculatePoints = ({ register, setValue }: { register: UseFormRegister<iFormUserRegisterPoints>, setValue: Dispatch<SetStateAction<string>> }) => {
    const [ info, setInfo ] = useState(false)

    function calculateValue(el : React.KeyboardEvent<HTMLInputElement>){
        const target = el.target as HTMLInputElement;

        if(target.value === ""){
            return setValue("")
        }

        const value = Math.ceil(+target.value / 10) * 10;
        setValue(value.toString())
    }

    return (
        <DivInputCalculate>
            <Input type="number" placeholder="Valor Gasto" { ...register("points") } onKeyUp={(el) => calculateValue(el)}/>
            <button type="button" onClick={() => info ? setInfo(false) : setInfo(true)}>
                <IconQuest size="20px"/>
            </button>

            <p style={info ? {display: "flex"} : {display: "none"}}>A soma dos pontos é realizada através da soma de valores cheios.<br/>Ex: 20, 30, 50...</p>
        </DivInputCalculate>
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