import { iButton } from "../../../interfaces/user/user.interface"
import { Button, ButtonSmallStyle } from "./style"

const ButtonUserSmall = ({text, type}: iButton) => {
    return (
        <ButtonSmallStyle type={type}>{text}</ButtonSmallStyle>
    )
}

const ButtonUser = ({text, type, margin}: iButton) => {
    return (
        <Button style={{marginTop: `${margin}`}} type={type}>{text}</Button>
    )
}

export { ButtonUserSmall, ButtonUser }