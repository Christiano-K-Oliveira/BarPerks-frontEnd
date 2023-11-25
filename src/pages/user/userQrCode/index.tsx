import { useContext, useState } from "react"
import FooterUser from "../../../components/Footer/FooterUser"
import { HeaderUser } from "../../../components/Header/HeaderUser"
import { Main } from "../style"
import { SectionQrCode } from "./style"
import { useParams } from "react-router-dom"
import { ClientContext } from "../../../contexts/clienteContext"

const UserQrCode = () => {
    const { qrcode } = useParams();
    const { validatePoints, points } = useContext(ClientContext)

    const submitCode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(qrcode){
            validatePoints(qrcode!)
        }
        else{            
            validatePoints(valueInput)
        }
    }

    const [valueInput, setValueInput ] = useState("")

    const getValueInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement

        setValueInput(target.value)
    }
 
    return (
        <>
            <HeaderUser/>

            <Main>
                <SectionQrCode>
                    <div>
                        <h2>Validar Pontuação</h2>

                        <h3>Informe o Código ou leia o Qr Code com a sua câmera para validar sua pontuação</h3>

                        <form onSubmit={(e) => submitCode(e)} >
                            <input type="text" placeholder="Código de Validação" value={qrcode} onKeyUp={(e) => getValueInput(e)}/>

                            <button type="submit">Validar Pontuação</button>
                        </form>
                        
                        {
                            points ? 
                            <p>Sua pontuação era de {points?.old_points}pts e ficou com {points?.points}pts. Subindo <span>+{+points!.points - +points!.old_points!}pts.</span></p>
                            : null
                        }
                    </div>
                </SectionQrCode>
            </Main>

            <FooterUser/>
        </>
    )
}

export default UserQrCode