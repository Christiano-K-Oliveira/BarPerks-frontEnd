import { DivBox, DivBoxGray, DivBoxInfoMobile, DivBoxMobile, ItemListReward, SpanInfo, SpanInfoMobile, TitleInfo, TitleInfoMobile } from "./style"

interface iCardReward {
    id: string;
    status: string;
    data: string;
    recompensa: string;
    nome_bar: string;
}

const CardReward = ({ id, status, data, recompensa, nome_bar }: iCardReward) => {
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
                <SpanInfo>{id}</SpanInfo>
                <SpanInfo>{status}</SpanInfo>
                <SpanInfo>{data}</SpanInfo>
                <SpanInfo>{recompensa}</SpanInfo>
                <SpanInfo>{nome_bar}</SpanInfo>
            </DivBoxGray>

            <DivBoxMobile>
                <DivBoxInfoMobile>
                    <TitleInfoMobile>ID Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>{id}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Status:</TitleInfoMobile>
                    <SpanInfoMobile>{status}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Data:</TitleInfoMobile>
                    <SpanInfoMobile>{data}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>{recompensa}</SpanInfoMobile>
                </DivBoxInfoMobile>


                <DivBoxInfoMobile>
                    <TitleInfoMobile>Nome do Bar:</TitleInfoMobile>
                    <SpanInfoMobile>{nome_bar}</SpanInfoMobile>
                </DivBoxInfoMobile>
            </DivBoxMobile>
        </ItemListReward>
    )
}

const CardRewardWithoutTitle = ({ id, status, data, recompensa, nome_bar }: iCardReward) => {
    return (
        <ItemListReward>
            <DivBoxGray>
                <SpanInfo>{id}</SpanInfo>
                <SpanInfo>{status}</SpanInfo>
                <SpanInfo>{data}</SpanInfo>
                <SpanInfo>{recompensa}</SpanInfo>
                <SpanInfo>{nome_bar}</SpanInfo>
            </DivBoxGray>

            <DivBoxMobile>
                <DivBoxInfoMobile>
                    <TitleInfoMobile>ID Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>{id}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Status:</TitleInfoMobile>
                    <SpanInfoMobile>{status}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Data:</TitleInfoMobile>
                    <SpanInfoMobile>{data}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Recompensa:</TitleInfoMobile>
                    <SpanInfoMobile>{recompensa}</SpanInfoMobile>
                </DivBoxInfoMobile>

                <DivBoxInfoMobile>
                    <TitleInfoMobile>Nome do bar:</TitleInfoMobile>
                    <SpanInfoMobile>{nome_bar}</SpanInfoMobile>
                </DivBoxInfoMobile>
            </DivBoxMobile>
        </ItemListReward>
    )
}

export { CardReward, CardRewardWithoutTitle }