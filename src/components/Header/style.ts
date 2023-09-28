import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { HiMenu } from "react-icons/hi"
import { FaWindowClose } from "react-icons/fa"

export const HeaderGlobal = styled.header`
    background-color: var(--white-fixed);
    width: 100vw;
    height: 90px;
    display: flex;
    flex-direction: column;
    position: fixed;

    @media (max-width: 800px) {
        height: 65px;
    }
`

export const DivBox = styled.div`
    margin: 0 auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const Figure = styled.figure`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const TitleLogo = styled.h1`
    font-size: var(--font-size-1);
    font-weight: 600;
    color: var(--grey-0);
    cursor: pointer;

    @media(max-width: 800px){
        font-size: var(--font-size-4);
    }
`

export const ImgLogo = styled.img`
    width: 45px;
    height: 45px;
    transform: translateY(-3px) translateX(-3px);
    cursor: pointer;

    @media(max-width: 800px){
        width: 24px;
        height: 24px;
        transform: translateY(-1px) translateX(-2px);
    }
`

export const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 799px) {
        display: none
    }
`

export const LinkSection = styled(Link)`
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 300;
    transition: 0.2s ease;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid var(--yellow-1);
        transition: 0.2s ease;
    }

`

export const LinkSectionMobile = styled(Link)`
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 300;
    transition: 0.2s ease;
    padding: 5px;
    width: 95%;
    text-align: center;
    border: 1px solid var(--grey-0);

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.2s ease;
    }

    @media(min-width: 800px){
        display: none;
    }
`

export const BoxLinkLog = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
`

export const LinkLog = styled(Link)`
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 500;
    border: 2px solid var(--grey-0);
    background-color: var(--yellow-1);
    width: 120px;
    height: 28px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--yellow-1);
        transition: 0.2s ease;
    }
`

const openIcon = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const MenuIcon = styled(HiMenu)`
    animation: 0.5s ease ${openIcon};

    @media(min-width: 800px) {
        display: none;
    }
`

export const CloseMenuIcon = styled(FaWindowClose)`
    animation: 0.5s ease ${openIcon};

    @media(min-width: 800px) {
        display: none;
    }
`

export const NavLinksMobile = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 0 auto;
    margin-top: 20px;
    flex-direction: column;
    background-color: var(--white-fixed);
    z-index: 2;

    @media (min-width: 800px) {
        display: none
    }
`

export const DivBoxMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 15px;
`

export const LinkLogMobile = styled(Link)`
    color: var(--grey-0);
    font-size: var(--font-size-6);
    font-weight: 500;
    border: 2px solid var(--grey-0);
    background-color: var(--yellow-1);
    width: 85%;
    /* height: 20px; */
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease;
    margin-bottom: 10px;

    &:hover{
        background-color: var(--grey-0);
        color: var(--yellow-1);
        transition: 0.2s ease;
    }
`