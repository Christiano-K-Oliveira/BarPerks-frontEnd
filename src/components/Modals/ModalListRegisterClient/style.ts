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
    width: 63%;
    background-color: var(--white-fixed);
    border-radius: 8px;
    z-index: 2;
    padding: 20px;
    margin: 50px 0px;
    top: 20px;
    bottom: 50px;
    position: absolute;
    overflow-x: hidden;

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

export const ListModal = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 0 10px;
`