import CardUser from "./CardUser"
import { FormSearchPub, FormUserAdminEdit, FormUserEdit, FormUserRegisterClient, FormUserRegisterPoints, FormUserRegisterProducts, FormUserSearchClient } from "./Form"
import { DivSearchPub, ListCards, ListCardsPub, ListCardsRewards, SectionUser, SpanName, Title } from "./style"
import { BiSolidUser } from "react-icons/bi"
import img from "../../assets/images/4seta-vector.svg"
import { CardReward, CardRewardWithoutTitle } from "./CardReward"
import CardPub from "./CardPub"

const SectionUserAdminEdit = () => {
    return (
        <SectionUser>
            <Title style={{fontSize: "var(--font-size-1)"}}><BiSolidUser size="32px"/>Detalhes do Usuário</Title>
            <SpanName>Gustavo Barbalho</SpanName>

            <FormUserAdminEdit/>
        </SectionUser>
    )
}

const SectionRegisterPoints = () => {
    return (
        <SectionUser>
            <Title style={{justifyContent: "center", marginBottom: "10px"}}>Registrar Pontuação</Title>

            <FormUserRegisterPoints/>
        </SectionUser>
    )
}

const SectionRegisterProducts = () => {
    return (
        <SectionUser>
            <Title style={{justifyContent: "center"}}>Cadastrar Produtos</Title>

            <FormUserRegisterProducts/>
        </SectionUser>
    )
}

const SectionRegisterClient = () => {
    return (
        <SectionUser>
            <Title style={{justifyContent: "center"}}>Cadastrar Cliente</Title>

            <FormUserRegisterClient/>
        </SectionUser>
    )
}

const SectionSearchUser = () => {
    return (
        <SectionUser>
            <Title style={{justifyContent: "center"}}>Buscar Usuário</Title>

            <FormUserSearchClient/>

            <ListCards style={{border: "2px solid var(--grey-0)"}}>
                <CardUser name="Gustavo Barbalho da Silva" cpf="XXX.XXX.XXX.XX" photo_url={img}/>
            </ListCards>
        </SectionUser>
    )
}

const SectionUserEdit = () => {
    return (
        <SectionUser>
            <Title style={{fontSize: "var(--font-size-1)"}}><BiSolidUser size="32px"/>Meu Perfil</Title>
            <SpanName>Gustavo Barbalho - 150pts</SpanName>

            <FormUserEdit/>
        </SectionUser>
    )
}

const SectionRewardHistoric = () => {
    return (
        <SectionUser style={{width: "100vw", padding: "0px"}}>
            <Title style={{justifyContent: "center", marginTop: "20px"}}>Histórico de Resgates</Title>

            <ListCardsRewards>
                <CardReward/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
            </ListCardsRewards>
        </SectionUser>
    )
}

const SectionRedeemReward = () => {

    return (
        <SectionUser>
            <Title style={{justifyContent: "center", marginTop: "20px"}}>Resgatar Recompensas</Title>

            <FormSearchPub/>

            <DivSearchPub>
                <figure>
                    <img src={img} alt="img-usuario"/>
                    <h2>Bar do Perks</h2>
                </figure>

                <input type="text" placeholder="Bucar produto"/>
            </DivSearchPub>

            <ListCardsPub>
                <CardPub/>
                <CardPub/>
                <CardPub/>
                <CardPub/>
                <CardPub/>
                <CardPub/>
                <CardPub/>
                <CardPub/>

            </ListCardsPub>
        </SectionUser>
    )
}

export { 
    SectionUserAdminEdit, 
    SectionRegisterPoints,
    SectionRegisterProducts,
    SectionRegisterClient,
    SectionSearchUser,
    SectionUserEdit,
    SectionRewardHistoric,
    SectionRedeemReward
}