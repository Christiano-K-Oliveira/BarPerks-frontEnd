import { Button } from "./style"

interface iButtonForm {
    name: string;
}

const ButtonForm = ({ name }: iButtonForm) => {
    return (
        <Button type="submit">{name}</Button>
    )
}

export default ButtonForm