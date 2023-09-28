import { ButtonRescue, FigurePub, ItemPub } from "./style"

const CardPub = () => {
    return (
        <ItemPub>
            <FigurePub>
                <img src="" alt="img-bar" />

                <div>
                    <h3>Nome do Produto</h3>
                    <span>Valor R$50.00</span>
                </div>
            </FigurePub>

            <ButtonRescue>Resgatar</ButtonRescue>
        </ItemPub>
    )
}

export default CardPub