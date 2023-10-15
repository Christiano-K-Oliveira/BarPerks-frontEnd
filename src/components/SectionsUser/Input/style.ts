import styled from "styled-components"
import { BsQuestionLg } from 'react-icons/bs'

export const Input = styled.input`
    padding: 8px;
    width: 300px;
    height: 28px;
    border-radius: 24px;
    background-color: var(--grey-6);
    outline: none;
    border: 2px solid transparent;
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 600;
    transition: 0.3s ease;
    max-width: 100%;

    &:focus{
        border: 2px solid var(--grey-0);
    }

    &::placeholder{
        text-align: center;
        opacity: 1;
    }

    @media(max-width: 800px){
        width: 100%;
    }
`

export const InputEdit = styled.input`
    padding: 8px;
    width: 300px;
    height: 28px;
    border-radius: 24px;
    background-color: var(--grey-6);
    outline: none;
    border: 2px solid transparent;
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 400;
    transition: 0.3s ease;
    max-width: 100%;

    &:focus{
        border: 2px solid var(--grey-0);
    }

    &::placeholder{
        opacity: 1;
    }

    @media(max-width: 800px){
        width: 100%;
    }
`

export const DivInputCalculate = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    button{
        position: absolute;
        right: 5px;
        top: 5px;
        background-color: transparent;
    }
`

export const IconQuest = styled(BsQuestionLg)`
    color: var(--grey-0);
`

export const DivInfo = styled.div`
    border: 2px solid var(--grey-0);
    background-color: var(--white-fixed);
    padding: 10px;
    width: 250px;
    transform: translate(-200px)

    p{
        font-size: var(--font-size-5);
        text-align: justify;
    }
`