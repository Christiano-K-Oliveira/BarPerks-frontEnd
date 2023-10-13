import { ButtonRescue, FigurePub, ItemPub } from "./style"

interface iCardPub {
    name: string;
    value: string;
    photo?: string;
}

const CardPub = ({ name, value, photo }: iCardPub) => {
    return (
        <ItemPub>
            <FigurePub>
                <img src={photo} alt="img-produto" />

                <div>
                    <h3>{name}</h3>
                    <span>{`Valor ${value}pts`}</span>
                </div>
            </FigurePub>

            <ButtonRescue>Resgatar</ButtonRescue>
        </ItemPub>
    )
}

export default CardPub