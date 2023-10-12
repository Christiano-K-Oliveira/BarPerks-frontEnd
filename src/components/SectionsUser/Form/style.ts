import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const DivBoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        width: 100%;
        margin-top: 5px;
    }
`

export const DivBoxInputSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 82px;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: 100%;
        margin: 0px;
    }
`

export const Label = styled.label`
    display: flex;
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
`

export const Span = styled.span`
    color: var(--alert-1);
    font-size: var(--font-size-6);
    font-weight: 500;
    margin-top: -10px;
`

export const DivBtns = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 450px;
    gap: 15px;
    margin: 20px 0px;

    @media(max-width: 800px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`

export const ButtonSearch = styled.button`
    display: flex;
    justify-content: center;
    background-color: var(--yellow-1);
    color: var(--grey-0);
    border-radius: 4px;
    padding: 5px;
    width: 75px;
    font-size: var(--font-size-6);
    font-weight: 600;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }

    @media(max-width: 800px){
        width: 200px;
        font-size: var(--font-size-5);
    }
`

export const SelectMenu = styled.select`
    text-align: center;
    padding: 8px;
    width: 300px;
    border-radius: 12px;
    background-color: var(--grey-6);
    outline: none;
    border: 2px solid transparent;
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 400;
    transition: 0.3s ease;
    max-width: 100%;

    &:focus{
        border: 2px solid var(--grey-0);
    }

    @media(max-width: 800px){
        width: 100%;
    }
`

export const OptionSelect = styled.option`
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 400;
`

export const InputFile = styled.input`
    color: var(--gray-0);
    font-size: var(--font-size-5);
    font-size: 500;
    outline: none;
    border: 2px solid var(--yellow-1);
    padding: 5px;
    transition: 0.2s ease;
    display: flex;
    padding: 5px 15px;
    cursor: pointer;
    text-align: center;
    transition: 0.3s ease;

    &::placeholder{
        color: var(--grey-0);
        font-weight: 600;
    }

    &:hover{
        background-color: var(--yellow-1);
        transition: 0.3s ease;

        &::placeholder{
            color: var(--white-fixed);
        }
    }
`

export const DivInputsYellow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: var(--yellow-1);
    padding: 10px;
    gap: 20px;
    width: 850px;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 8px;
    max-width: 100%;

    input{
        border: 2px solid var(--grey-3);
        width: 48%;
        max-width: 100%;
        height: 40px;
        border-radius: 12px;
        background-color: var(--white-fixed);
        padding: 10px;
        font-size: var(--font-size-5);
        font-weight: 400;
        color: var(--grey-0);
        outline: none;
        transition: 0.2s ease;

        &:focus{
            border: 2px solid var(--grey-0);
            transition: 0.2s ease;
        }

        @media(max-width: 650px){
            width: 95%;
            margin: 0 auto;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size-5);
        font-weight: 600;
        color: var(--white-fixed);
        text-align: center;
        background-color: var(--grey-0);
        padding: 10px;
        border-radius: 12px;
        width: 200px;
        height: 32px;
        margin: 0 auto;
        border: 2px solid transparent;
        transition: 0.3s ease;

        &:hover{
            color: var(--grey-0);
            background-color: var(--white-fixed);
            border: 2px solid var(--grey-0);
            transition: 0.3s ease;
        }
    }
`

export const SpanFile = styled.span`
    color: var(--grey-0);
    cursor: pointer;
`