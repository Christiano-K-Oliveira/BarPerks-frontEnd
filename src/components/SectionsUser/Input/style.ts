import styled from "styled-components"

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