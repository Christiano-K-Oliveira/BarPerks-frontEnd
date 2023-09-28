import { iCardUser } from "../../../interfaces/user/user.interface"
import { ButtonEditUser, FigureUser, ImgUser, ItemList, SpanCpfUser, TitleUser } from "./style"
import { FaUserCircle } from "react-icons/fa"


const CardUser = ({ name, cpf, photo_url }: iCardUser) => {
    return (
        <ItemList>
            <FigureUser>
                {
                    photo_url ? <ImgUser src={photo_url} alt="img-usuario"/>
                    :
                    <FaUserCircle size="32px"/>
                }
                <TitleUser>{name}</TitleUser>
            </FigureUser>

            <SpanCpfUser>{cpf}</SpanCpfUser>
            <ButtonEditUser>Editar Perfil</ButtonEditUser>
        </ItemList>
    )
}

export default CardUser