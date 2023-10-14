import { useContext } from "react"
import { AdminContext } from "../../../contexts/administradorContext"
import { iCardUser } from "../../../interfaces/user/user.interface"
import { ButtonEditUser, ButtonExclude, ButtonRewards, FigureUser, ImgUser, ItemList, SpanInfoUser, TitleUser } from "./style"
import { FaUserCircle } from "react-icons/fa"

const CardUser = ({ name, cpf, photo_url, telephone, email, id }: iCardUser) => {
    const { setModalEditRegisterClient, setIdRegisterClient, excludeRegisterClient, setModalRescueRewards } = useContext(AdminContext)  

    return (
        <ItemList>
            <div>
                <FigureUser>
                    {
                        photo_url ? <ImgUser src={photo_url} alt="img-usuario"/>
                        :
                        <FaUserCircle size="32px"/>
                    }
                    <TitleUser>{name}</TitleUser>
                </FigureUser>

                <SpanInfoUser>Cpf: <span>{cpf}</span></SpanInfoUser>
                <SpanInfoUser>Email: <span>{email}</span></SpanInfoUser>
                <SpanInfoUser>Telefone: <span>{telephone}</span></SpanInfoUser>
            </div>

            <div>
                <ButtonRewards onClick={() => setModalRescueRewards(true)}>Resgatar Recompensa</ButtonRewards>
                <ButtonEditUser onClick={() => {
                    setModalEditRegisterClient(true)
                    setIdRegisterClient(id)
                    }
                }>Editar Perfil</ButtonEditUser>
                <ButtonExclude onClick={() => excludeRegisterClient(id)}>Excluir Registro</ButtonExclude>
            </div>
        </ItemList>
    )
}

export default CardUser