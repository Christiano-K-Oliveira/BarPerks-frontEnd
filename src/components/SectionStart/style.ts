import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SectionStarting = styled.section`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    height: 88vh;
    background-color: var(--white-fixed);
    margin: 0 auto;
    margin-bottom: 80px;
`

export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    @media(max-width: 800px) {
        margin-top: 30px;
    }
`

export const Title = styled.h2`
    font-size: var(--font-size-2);
    font-weight: 600;
    color: var(--grey-0);
    margin-bottom: 20px;
    line-height: 140%;

    @media(max-width: 800px) {
        font-size: var(--font-size-4);
        width: 75%;
        display: flex;
        flex-wrap: wrap;
    }
`

export const Paragraph = styled.p`
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 400;
    width: 85%;
    line-height: 125%;

    @media(max-width: 800px) {
        font-size: var(--font-size-5);
    }

`

export const Figure = styled.figure`
    width: 450px;
    height: 400px;

    @media(max-width: 800px) {
        display: none;
    }
`

export const ImageBeer = styled.img`
    width: 450px;
    height: 400px;
    margin-top: 80px;
`

export const LinkStart = styled(Link)`
    background-color: var(--grey-0);
    color: var(--white-fixed);
    font-size: var(--font-size-3);
    font-weight: 600;
    width: 150px;
    min-height: 35px;
    border: 2px solid var(--grey-0);
    margin-top: 15px;
    transition: 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: var(--white-fixed);
        color: var(--grey-0);
        transition: 0.3s ease;
    }

    @media(max-width: 800px) {
        font-size: var(--font-size-5);
        width: 120px;
        height: 30px;
    }
`

export const DivBoxIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media(max-width: 800px) {
        justify-content: flex-start;
        gap: 10px;
    }
    @media(min-width: 600px) {
        gap: 20px;
    }
`

export const DivBoxIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const FigureIcon = styled.figure`
    background-color: var(--grey-0);
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SpanIcon = styled.span`
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 600;

    @media(max-width: 800px) {
        font-size: var(--font-size-7);
    }

    @media(max-width: 1080px) {
        font-size: var(--font-size-6);
    }`

export const PadlockIcon = styled.img`
    width: 36px;
    height: 36px;

    @media(max-width: 800px) {
        width: 26px;
        height: 26px;
    }
`

export const FourArrowsIcon = styled.img`
    width: 36px;
    height: 36px;

    @media(max-width: 800px) {
        width: 28px;
        height: 28px;
    }
`

export const BreakLine = styled.br`
    @media(max-width: 1060px) {
        display: none;
    }
`
