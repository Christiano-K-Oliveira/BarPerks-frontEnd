import styled from "styled-components";

export const ButtonSmallStyle = styled.button`
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--grey-0);
    background-color: var(--yellow-1);
    border-radius: 12px;
    width: 150px;
    padding: 8px;
    border: none;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }

    @media(max-width: 800px){
        width: 100%;
        padding: 5px;
    }
`

export const Button = styled.button`
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--grey-0);
    background-color: var(--yellow-1);
    border-radius: 12px;
    width: 300px;
    padding: 8px;
    border: none;
    transition: 0.3s ease;
    margin-top: 20px;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }

    @media(max-width: 800px){
        width: 100%;
        padding: 5px;
    }
`