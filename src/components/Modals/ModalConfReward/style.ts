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
    z-index: 1;
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 180px;
    background-color: var(--white-fixed);
    border-radius: 8px;
    z-index: 1;
    padding: 20px;
    top: 25vh;
    position: absolute;

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

export const Paragraph = styled.p`
    font-size: var(--font-size-4);
    color: var(--grey-0);
    margin-top: 20px;
    display: flex;
    text-align: justify;
    padding-right: 10px;
`

export const DivBtns = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 5px;
`

export const ButtonConf = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    background-color: var(--grey-5);
    color: var(--grey-0);
    font-size: var(--font-size-5);
    transition: 0.3s ease;

    &:hover{
        background-color: var(--yellow-1);
        transition: 0.3s ease;
    }
`

export const ButtonExit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 80px;
    padding: 5px;
    background-color: var(--grey-5);
    color: var(--grey-0);
    font-size: var(--font-size-5);
    transition: 0.3s ease;

    &:hover{
        color: var(--white-fixed);
        background-color: var(--alert-3);
        transition: 0.3s ease;
    }
`