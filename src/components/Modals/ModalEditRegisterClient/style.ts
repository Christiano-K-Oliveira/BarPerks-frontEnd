import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    background-color: var(--white-fixed);
    border-radius: 8px;
    z-index: 3;
    padding: 20px;
    margin: 50px 0px;
    position: absolute;
    overflow-x: hidden;
    height: 400px;

    @media(max-width: 800px){
        width: 75%;
    }
`

export const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleModal = styled.h2`
    font-size: var(--font-size-2);
    font-weight: 600;
    color: var(--gray-0);

    @media(max-width: 400px){
        font-size: var(--font-size-3);
    }
`

export const ButtonCloseModal = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: 0.2 ease;
    padding: 1px;
    background-color: var(--white-fixed);

    &:hover{
        border: 2px solid var(--yellow-1);
        transition: 0.2 ease;
    }


    @media(max-width: 400px){
        width: 28px;
        height: 28px;
    }
`

export const SubTitleModal = styled.h2`
    display: flex;
    justify-content: center;
    background-color: var(--yellow-1);
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--gray-0);
    padding: 5px 20px;
    margin: 20px 10px;

    @media(max-width: 400px){
        font-size: var(--font-size-4);
    }
`

export const FormEditProduct = styled.form`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
`

export const TitleEdit = styled.h3`
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 600;
    margin-bottom: 10px;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`

export const Label = styled.label`
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 600;
`

export const Input = styled.input`
    padding: 5px;
    color: var(--grey-0);
    font-size: var(--font-size-5);
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

export const ButtonEdit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background-color: var(--yellow-1);
    color: var(--grey-0);
    margin-top: 20px;
    font-size: var(--font-size-5);
    font-weight: 600;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`

export const SpanError = styled.span`
    color: var(--alert-1);
    font-size: var(--font-size-6);
`