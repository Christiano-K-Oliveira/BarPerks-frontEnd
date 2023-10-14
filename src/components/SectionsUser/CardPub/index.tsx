import { useContext } from "react";
import { ButtonRescue, FigurePub, ItemPub } from "./style"
import { ClientContext } from "../../../contexts/clienteContext";

interface iCardPub {
    name: string;
    value: string;
    photo?: string;
}

const CardPub = ({ name, value, photo }: iCardPub) => {
    const { setModalConfReward, setRewardInfo } = useContext(ClientContext)

    return (
        <ItemPub>
            <FigurePub>
                <img src={photo} alt="img-produto" />

                <div>
                    <h3>{name}</h3>
                    <span>{`Valor ${value}pts`}</span>
                </div>
            </FigurePub>

            <ButtonRescue onClick={() => {
                setRewardInfo({
                    name: name,
                    points: value,
                })
                
                setModalConfReward(true)
                }
            }>Resgatar</ButtonRescue>
        </ItemPub>
    )
}

export default CardPub