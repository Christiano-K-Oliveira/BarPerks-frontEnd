import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi"
import { FaWindowClose } from "react-icons/fa"
import { MdExitToApp } from "react-icons/md"

export const HeaderUserEdit = styled.header`
    background-color: var(--grey-6);
    width: 100vw;
    height: 90px;
    display: flex;
    flex-direction: column;

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

export const TitleLogo = styled.h1`
    font-size: var(--font-size-1);
    font-weight: 600;
    color: var(--grey-0);
    cursor: pointer;

    @media(max-width: 800px){
        font-size: var(--font-size-3);
    }
`

export const Figure = styled.figure`
    display: flex;
    align-items: center;
    cursor: pointer;
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

    @media (max-width: 860px) {
        display: none;
    }

    @media (max-width: 980px) {
        gap: 5px;
    }

    @media (max-width: 1060px) {
        gap: 10px;
    }
`

export const LinkHeader = styled(Link)`
    color: var(--grey-3);
    font-size: var(--font-size-5);
    font-weight: 600;
    transition: 0.2s ease;
    border-bottom: 2px solid transparent;

    &:hover{
        color: var(--grey-0);
        border-bottom: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }

    @media(max-width: 1060px){
        font-size: var(--font-size-6);
    }

    @media(max-width: 980px){
        text-align: center;
        width: 80px;
    }
`

export const UserIcon = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow-1);
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
`

export const DivBoxIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    margin-left: 20px;
    border-radius: 12px;
    transition: 0.3s ease;

    &:hover{
        border-bottom: 3px solid var(--grey-0);
        transition: 0.3s ease;
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

    @media(min-width: 861px) {
        display: none;
    }
`

export const CloseMenuIcon = styled(FaWindowClose)`
    animation: 0.5s ease ${openIcon};

    @media(min-width: 861px) {
        display: none;
    }
`

export const NavLinksMobile = styled.nav`
    display: flex;
    align-items: center;
    width: 100vw;
    margin: 0 auto;
    background-color: var(--grey-6);
    z-index: 2;
    padding-top: 20px;
    padding-bottom: 15px;

    @media (min-width: 861px) {
        display: none
    }
`

export const DivBoxLinksMobile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
`

export const LinkMobile = styled(Link)`
    display: flex;
    margin: 0 auto;
    color: var(--grey-3);
    font-size: var(--font-size-6);
    font-weight: 600;
    transition: 0.2s ease;
    border-bottom: 2px solid transparent;
    margin: 5px;

    &:hover{
        color: var(--grey-0);
        border-bottom: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }
`

export const LinkMobileExit = styled(Link)`
    display: flex;
    margin: 0 auto;
    color: var(--grey-3);
    font-size: var(--font-size-6);
    font-weight: 600;
    transition: 0.2s ease;
    border-bottom: 2px solid transparent;
    margin: 5px;

    &:hover{
        color: var(--alert-2);
        border-bottom: 2px solid var(--alert-2);
        transition: 0.2s ease;
    }
`

export const SpanName = styled.span`
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 600;
    margin-left: 5px;
`

export const LinkExit = styled(Link)`
    position: absolute;
    top: 25px;
    right: 30px;
`

export const IconExit = styled(MdExitToApp)`
    width: 32px;
    height: 32px;
    color: var(--grey-0);
    transition: 0.3s ease;

    &:hover{
        color: red;
        transition: 0.3s ease;
    }
`