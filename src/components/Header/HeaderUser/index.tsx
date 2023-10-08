import { useNavigate } from "react-router-dom"
import { CloseMenuIcon, DivBox, DivBoxLinksMobile, Figure, LinkMobile, MenuIcon, SpanName } from "./style"
import { DivBoxIcon, HeaderUserEdit, ImgLogo, LinkHeader, NavLinks, NavLinksMobile, TitleLogo, UserIcon } from "./style"
import IconLogo from '../../../assets/images/icon-barperks.svg'
import { BiSolidUser } from "react-icons/bi"
import { useState } from "react"

const HeaderUserAdmin = () => {
    const navigate = useNavigate()
    const [menuMobile, openMenuMobile] = useState(false)

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
                    <LinkHeader to={"/admin/cadastrar-cliente"}>Cadastrar Usuário</LinkHeader>
                    <LinkHeader to={"/admin/buscar-usuario"}>Buscar Usuário</LinkHeader>

                    <DivBoxIcon onClick={() => navigate("/admin")}>
                        <UserIcon>
                            <BiSolidUser size="26px"/>
                        </UserIcon>

                        <SpanName>Gustavo Barbalho</SpanName>
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
                            <LinkMobile to={'/admin/cadastrar-cliente'}>Cadastrar Usuário</LinkMobile>
                            <LinkMobile to={'/admin/buscar-usuario'}>Buscar Usuário</LinkMobile>
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

    return (
        <HeaderUserEdit>
            <DivBox>
                <Figure onClick={() => navigate('/usuario')}>
                    <TitleLogo>BarPerks</TitleLogo>
                    <ImgLogo src={IconLogo} alt="icone-logo"/>
                </Figure>

                <NavLinks>
                    <LinkHeader to={"/usuario/historico-resgates"}>Histórico de Resgates</LinkHeader>
                    <LinkHeader to={"/usuario"}>Editar Perfil</LinkHeader>
                    <LinkHeader to={"/usuario/resgatar-recompensas"}>Resgatar Recompensas</LinkHeader>

                    <DivBoxIcon onClick={() => navigate("/usuario")}>
                        <UserIcon>
                            <BiSolidUser size="26px"/>
                        </UserIcon>

                        <SpanName>Gustavo Barbalho - 150pts</SpanName>
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
                        </DivBoxLinksMobile>
                    </NavLinksMobile>
                    :
                    <></>
                }
        </HeaderUserEdit>
    )
}

export { HeaderUserAdmin, HeaderUser }