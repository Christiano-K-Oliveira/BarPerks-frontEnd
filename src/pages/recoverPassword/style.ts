import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    width: 100vw;
    background-color: var(--white-fixed);
`

export const SectionRecoverPassword = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 82vw;
    margin: 0 auto;
    min-height: 87vh;
`

export const FigureLogo = styled.figure`
    display: flex;
    align-items: center;
    margin: 30px 0;
`

export const TitleLogo = styled.h1`
    font-size: var(--font-title-recover);
    font-weight: 600;
    color: var(--grey-0);
`

export const ImgLogo = styled.img`
    width: 60px;
    height: 60px;
    margin-top: -5px;
`

export const TitleRecover = styled.h2`
    font-size: var(--font-title-2);
    font-weight: 600;
    color: var(--grey-0);
`

export const SpanReset = styled.h2`
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--grey-0);
`

export const Paragraph = styled.p`
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--grey-0);
    margin-top: 20px;
    margin-bottom: 10px;
`

export const InputRecover = styled.input`
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--grey-0);
    background-color: var(--grey-6);
    padding: 5px 10px;
    border: 2px solid transparent;
    transition: 0.2s ease;
    width: 560px;
    max-width: 100%;
    outline: none;
    margin-bottom: 10px;

    &:focus{
        border: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }
`

export const ButtonReset = styled.button`
    padding: 5px 15px;
    text-align: center;
    background-color: var(--yellow-1);
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 600;
    border-radius: 24px;
    width: 150px;
    margin: 10px 0;
    transition: 0.3s ease;


    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`

export const LinkLogin = styled.a`
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 300;
    transition: 0.3s ease;

    strong{
        color: var(--grey-0);
        font-size: var(--font-size-3);
        font-weight: 700;
    }

    &:hover{
        text-decoration: underline;
        transition: 0.3s ease;
    }
`

export const SpanYellow = styled.span`
    padding: 15px 25px;
    background-color: var(--yellow-1);
    color: var(--grey-0);
    font-size: var(--font-size-2);
    font-weight: 300;
    width: 455px;
    max-width: 100%;

    @media(max-width: 560px){
        text-align: center;
    }
`

export const ParagraphCode = styled.p`
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--grey-0);
    margin-top: 20px;
    margin-bottom: 10px;
    width: 455px;
    max-width: 100%;
    text-align: justify;
`