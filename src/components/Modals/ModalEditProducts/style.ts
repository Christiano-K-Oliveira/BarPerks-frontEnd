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
    width: 60%;
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

export const ItemListModal = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid var(--grey-0);
    border-radius: 8px;
    padding: 10px;
    height: 320px;
    width: 178px;
`

export const DivItemModal = styled.div`
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--grey-0);
    margin-bottom: 5px;

    span{
        font-size: var(--font-size-5);
        font-weight: 400;
        color: var(--grey-0);
        word-wrap: break-word;
    }
`

export const BtnUpdateProduct = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: var(--font-sise-5);
    font-weight: 600;
    padding: 3px;
    background-color: var(--yellow-1);
    color: var(--grey-0);
    transition: 0.3s ease;
    margin-top: 10px;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`

export const BtnExcludeProduct = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: var(--font-sise-5);
    font-weight: 600;
    padding: 3px;
    background-color: var(--yellow-1);
    color: var(--grey-0);
    transition: 0.3s ease;
    margin-top: 5px;

    &:hover{
        background-color: var(--alert-3);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`

export const ImgProduct = styled.img`
    display: flex;
    max-width: 100%;
    height: 80px;
    background-color: black;
    margin-bottom: 10px;
`

export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
`