import { useNavigate } from "react-router-dom"
import { CloseMenuIcon, DivBox, DivBoxLinksMobile, Figure, LinkMobile, LinkMobileExit, MenuIcon, MenuNav } from "./style"
import { DivBoxIcon, HeaderUserEdit, ImgLogo, LinkHeader, NavLinks, NavLinksMobile, TitleLogo, UserIcon } from "./style"
import IconLogo from '../../../assets/images/icon-barperks.svg'
import { BiSolidUser } from "react-icons/bi"
import { useContext, useState } from "react"
import { ClientContext } from "../../../contexts/clienteContext"
import { AdminContext } from "../../../contexts/administradorContext"
import { FaArrowDown } from "react-icons/fa"

const HeaderUserAdmin = () => {
    const navigate = useNavigate()
    const [menuMobile, openMenuMobile] = useState(false)
    const { adminInfo, exitAdmin } = useContext(AdminContext)
    const [ navAdmin, setNavAdmin ] = useState(false)

    return (
        <HeaderUserEdit>
            <DivBox>
                <Figure onClick={() => navigate('/admin')}>
                    <TitleLogo>BarPerks</TitleLogo>
                    <ImgLogo src={IconLogo} alt="icone-logo"/>
                </Figure>

                <NavLinks>
                    <LinkHeader to={"/admin/registro-pontuacao"}>Registrar Pontuação</LinkHeader>
                    <LinkHeader to={"/admin/cadastrar-produtos"}>Cadastrar Produtos</LinkHeader>
                    <LinkHeader to={"/admin/cadastrar-cliente"}>Cadastrar Cliente</LinkHeader>
                    <LinkHeader to={"/admin/buscar-usuario"}>Buscar Usuário</LinkHeader>

                    <DivBoxIcon onClick={() => navAdmin ? setNavAdmin(false) : setNavAdmin(true)}>
                        <UserIcon>
                            {
                                adminInfo?.photo_url ? 
                                <img src={adminInfo.photo_url} alt="image-user"/>
                                :
                                <BiSolidUser size="26px"/>
                            }                        
                        </UserIcon>

                        <FaArrowDown size="26px"/>
                        <MenuNav style={navAdmin ? {display: "flex"} : {display: "none"}}>
                            <a href="">Meu Plano</a>
                            <a href="/admin">Minha Conta</a>
                            <a className="exit-link" onClick={() => exitAdmin()}>Sair</a>
                        </MenuNav>
                    </DivBoxIcon>                    
                </NavLinks>

                {
                    menuMobile === false ? 
                    <MenuIcon size={'24px'} color={'#000'} cursor={'pointer'} onClick={() => openMenuMobile(true)}/>
                    :
                    <CloseMenuIcon size={'22px'} color={'#000'} cursor={'pointer'} onClick={() => openMenuMobile(false)}/>
                }
            </DivBox>
                {
                    menuMobile !== false ?
                    <NavLinksMobile>
                        <DivBoxLinksMobile>
                            <LinkMobile to={'/admin'}>Editar Usuário</LinkMobile>
                            <LinkMobile to={'/admin/registro-pontuacao'}>Registar Pontuação</LinkMobile>
                            <LinkMobile to={'/admin/cadastrar-produtos'}>Cadastrar Produtos</LinkMobile>
                            <LinkMobile to={'/admin/cadastrar-cliente'}>Cadastrar Cliente</LinkMobile>
                            <LinkMobile to={'/admin/buscar-usuario'}>Buscar Usuário</LinkMobile>
                            <LinkMobileExit>Sair da Página</LinkMobileExit>
                        </DivBoxLinksMobile>
                    </NavLinksMobile>
                    :
                    <></>
                }
        </HeaderUserEdit>
    )
}

const HeaderUser = () => {
    const navigate = useNavigate()
    const [menuMobile, openMenuMobile] = useState(false)
    const { clientInfo, exitClient } = useContext(ClientContext)
    const [ navClient, setNavClient ] = useState(false)

    return (
        <HeaderUserEdit>
            <DivBox>
                <Figure onClick={() => navigate('/usuario')}>
                    <TitleLogo>BarPerks</TitleLogo>
                    <ImgLogo src={IconLogo} alt="icone-logo"/>
                </Figure>

                <NavLinks>
                    <LinkHeader style={{width: "fit-content"}} to={"/usuario/historico-resgates"}>Histórico de Resgates</LinkHeader>
                    <LinkHeader style={{width: "fit-content"}} to={"/usuario"}>Editar Perfil</LinkHeader>
                    <LinkHeader style={{width: "fit-content"}} to={"/usuario/resgatar-recompensas"}>Resgatar Recompensas</LinkHeader>

                    <DivBoxIcon onClick={() => navClient ? setNavClient(false) : setNavClient(true)}>
                        <UserIcon>
                            {
                                clientInfo?.photo_url ? 
                                <img src={clientInfo.photo_url} alt="image-user"/>
                                :
                                <BiSolidUser size="26px"/>
                            }                        
                        </UserIcon>

                        <FaArrowDown size="26px"/>
                        <MenuNav style={navClient ? {display: "flex"} : {display: "none"}}>
                            <a href="">Qr Code</a>
                            <a href="/usuario">Minha Conta</a>
                            <a className="exit-link" onClick={() => exitClient()}>Sair</a>
                        </MenuNav>
                    </DivBoxIcon> 
                </NavLinks>

                {
                    menuMobile === false ? 
                    <MenuIcon size={'24px'} color={'#000'} cursor={'pointer'} onClick={() => openMenuMobile(true)}/>
                    :
                    <CloseMenuIcon size={'22px'} color={'#000'} cursor={'pointer'} onClick={() => openMenuMobile(false)}/>
                }
            </DivBox>
                {
                    menuMobile !== false ?
                    <NavLinksMobile>
                        <DivBoxLinksMobile>
                            <LinkMobile to={'/usuario/historico-resgates'}>Histórico de Resgates</LinkMobile>
                            <LinkMobile to={'/usuario'}>Editar Perfil</LinkMobile>
                            <LinkMobile to={'/usuario/resgatar-recompensas'}>Resgatar Recompensas</LinkMobile>
                            <LinkMobile to={'/usuario'}>Qr Code</LinkMobile>
                            <LinkMobileExit onClick={() => exitClient()}>Sair da Página</LinkMobileExit>
                        </DivBoxLinksMobile>
                    </NavLinksMobile>
                    :
                    <></>
                }
        </HeaderUserEdit>
    )
}

export { HeaderUserAdmin, HeaderUser }