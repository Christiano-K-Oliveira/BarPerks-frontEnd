import { 
    HeaderGlobal, 
    DivBox, 
    Figure, 
    TitleLogo, 
    ImgLogo, 
    NavLinks, 
    LinkSection, 
    LinkLog, 
    BoxLinkLog, 
    MenuIcon,
    CloseMenuIcon,
    LinkSectionMobile,
    NavLinksMobile,
    DivBoxMobile,
    LinkLogMobile,
} from './style'
import IconLogo from '../../assets/images/icon-barperks.svg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [menuMobile, openMenuMobile] = useState(false)
      const navigate = useNavigate();

    return (
        <HeaderGlobal>
            <DivBox>
                <Figure onClick={() => navigate('/')}>
                    <TitleLogo>BarPerks</TitleLogo>
                    <ImgLogo src={IconLogo} alt="icone-logo"/>
                </Figure>

                {
                    menuMobile === false ? 
                    <MenuIcon size={'24px'} color={'#000'} cursor={'pointer'} onClick={() => openMenuMobile(true)}/>
                    :
                    <CloseMenuIcon size={'22px'} color={'#000'} cursor={'pointer'} onClick={() => openMenuMobile(false)}/>
                }

                <NavLinks>
                    <LinkSection to={'/'}>Início</LinkSection>
                    <LinkSection to={'/sobre'}>Sobre</LinkSection>
                    <LinkSection to={'/planos'}>Planos</LinkSection>
                    <BoxLinkLog>
                        <LinkLog to={''}>Inscreva-se</LinkLog>
                        <LinkLog to={''} >Login</LinkLog>
                    </BoxLinkLog>
                </NavLinks>
            </DivBox>

            {
                menuMobile !== false ?
                <NavLinksMobile>
                    <DivBoxMobile>
                        <LinkSectionMobile to={'/'}>Início</LinkSectionMobile>
                        <LinkSectionMobile to={'/sobre'}>Sobre</LinkSectionMobile>
                        <LinkSectionMobile to={'/planos'}>Planos</LinkSectionMobile>
                    </DivBoxMobile>

                    <LinkLogMobile to={''}>Inscreva-se</LinkLogMobile>
                    <LinkLogMobile to={''}>Login</LinkLogMobile>
                </NavLinksMobile>
                :
                <></>
            }

        </HeaderGlobal>
    )

}

export default Header