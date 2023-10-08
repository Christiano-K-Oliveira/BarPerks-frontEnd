import { Button } from "./style"

interface iButtonForm {
    name: string;
    olderAge?: boolean;
    errorOlderAge?: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonForm = ({ name, olderAge, errorOlderAge }: iButtonForm) => {
    return (
        <Button onClick={() => {
            if(olderAge === false && errorOlderAge){
                errorOlderAge(true)
            }
        }} type="submit">{name}</Button>
    )
}

export default ButtonForm