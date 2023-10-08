import { DivBox, DivBoxGray, DivBoxInfoMobile, DivBoxMobile, ItemListReward, SpanInfo, SpanInfoMobile, TitleInfo, TitleInfoMobile } from "./style"

const CardReward = () => {
    return (
        <ItemListReward>
            <DivBox>
                <TitleInfo>ID Recompensa:</TitleInfo>
                <TitleInfo>Status:</TitleInfo>
                <TitleInfo>Data:</TitleInfo>
                <TitleInfo>Recompensa:</TitleInfo>
                <TitleInfo>Nome do Bar:</TitleInfo>
            </DivBox>

            <DivBoxGray>
                <SpanInfo>254356</SpanInfo>
                <SpanInfo>Resgatada</SpanInfo>
                <SpanInfo>26/09/2023</SpanInfo>
                <SpanInfo>Balde de Cerveja Original - 6 unidades</SpanInfo>
                <SpanInfo>BalPd</SpanInfo>
            </DivBoxGray>

            <DivBoxMobile>
                <DivBoxInfoMobile>
                    <TitleInfoMobile>ID Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>254356</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Status:</TitleInfoMobile>
                    <SpanInfoMobile>Resgatada</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Data:</TitleInfoMobile>
                    <SpanInfoMobile>26/08/2023</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>Balde de Original - 5535</SpanInfoMobile>
                </DivBoxInfoMobile>


                <DivBoxInfoMobile>
                    <TitleInfoMobile>Nome do Bar:</TitleInfoMobile>
                    <SpanInfoMobile>BalPd</SpanInfoMobile>
                </DivBoxInfoMobile>
            </DivBoxMobile>
        </ItemListReward>
    )
}

const CardRewardWithoutTitle = () => {
    return (
        <ItemListReward>
            <DivBoxGray>
                <SpanInfo>254356</SpanInfo>
                <SpanInfo>Resgatada</SpanInfo>
                <SpanInfo>26/09/2023</SpanInfo>
                <SpanInfo>Balde de Cerveja Original - 6 unidades</SpanInfo>
                <SpanInfo>BalPd</SpanInfo>
            </DivBoxGray>

            <DivBoxMobile>
                <DivBoxInfoMobile>
                    <TitleInfoMobile>ID Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>254356</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Status:</TitleInfoMobile>
                    <SpanInfoMobile>Resgatada</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Data:</TitleInfoMobile>
                    <SpanInfoMobile>26/08/2023</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>Balde de Original - 5535</SpanInfoMobile>
                </DivBoxInfoMobile>
            </DivBoxMobile>
        </ItemListReward>
    )
}

export { CardReward, CardRewardWithoutTitle }