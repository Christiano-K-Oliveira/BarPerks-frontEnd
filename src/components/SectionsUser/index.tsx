import CardUser from "./CardUser"
import { FormSearchPub, FormUserAdminEdit, FormUserEdit, FormUserRegisterClient, FormUserRegisterPoints, FormUserRegisterProducts, FormUserSearchClient } from "./Form"
import { DivSearchPub, ListCards, ListCardsPub, ListCardsRewards, SectionUser, SpanName, Title } from "./style"
import { BiSolidUser } from "react-icons/bi"
import img from "../../assets/images/4seta-vector.svg"
// import { CardReward, CardRewardWithoutTitle } from "./CardReward"
import CardPub from "./CardPub"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clienteContext"
import { AdminContext } from "../../contexts/administradorContext"

const SectionUserAdminEdit = () => {
    const { adminInfo } = useContext(AdminContext)

    return (
        <SectionUser>
            <Title style={{fontSize: "var(--font-size-1)"}}>{ adminInfo?.photo_url ? <img style={{borderRadius: "50%", width: "42px", height: "42px"}} src={adminInfo.photo_url}/> : <BiSolidUser size="32px"/> }Detalhes do Usuário</Title>
            <SpanName>{adminInfo?.name}</SpanName>

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
            <Title style={{justifyContent: "center", marginBottom: "30px"}}>Cadastrar Produtos</Title>

            <FormUserRegisterProducts/>
        </SectionUser>
    )
}

const SectionRegisterClient = () => {
    return (
        <SectionUser>
            <Title style={{justifyContent: "center", marginBottom: "30px"}}>Cadastrar Cliente</Title>

            <FormUserRegisterClient/>
        </SectionUser>
    )
}

const SectionSearchUser = () => {
    const { searchUser } = useContext(AdminContext)

    return (
        <SectionUser>
            <Title style={{justifyContent: "center", marginBottom: "30px"}}>Buscar Usuário</Title>

            <FormUserSearchClient/>

            <ListCards>
                {
                    searchUser.length > 0 ? searchUser.map((item, index) => {
                    return (
                        <CardUser key={index} id={item.id} name={item.name} cpf={item.cpf} email={item.email} telephone={item.telephone} photo_url={item.client.photo_url ? item.client.photo_url : img}/>
                    );
                  }): null
                }
            </ListCards>
        </SectionUser>
    )
}

const SectionUserEdit = () => {
    const { clientInfo } = useContext(ClientContext)

    return (
        <SectionUser>
            <Title style={{fontSize: "var(--font-size-1)"}}>{clientInfo?.photo_url ? <img style={{width: "42px", height: "42px", borderRadius: "50%"}} src={clientInfo.photo_url} alt="image-user"/> : <BiSolidUser size="32px"/>}Meu Perfil</Title>
            <SpanName>{clientInfo?.name}</SpanName>

            <FormUserEdit/>
        </SectionUser>
    )
}

const SectionRewardHistoric = () => {
    return (
        <SectionUser style={{width: "100vw", padding: "0px"}}>
            <Title style={{justifyContent: "center", marginTop: "20px"}}>Histórico de Resgates</Title>

            <ListCardsRewards>
                {/* <CardReward/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/>
                <CardRewardWithoutTitle/> */}
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
                    <div>
                        <h2>Bar do Perks</h2>
                        <span>Gustavo Barbalho - 150pts</span>
                    </div>
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