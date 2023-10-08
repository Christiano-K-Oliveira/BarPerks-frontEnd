import styled from "styled-components"

export const ItemList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-5);
    max-width: 100%;
    width: 258px;
    height: 120px;
    border-radius: 8px;
    padding: 10px 5px;
`

export const FigureUser = styled.figure`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const ImgUser = styled.img`
    width: 32px;
    height: 32px;
    background-color: var(--grey-0);
    border-radius: 50%;
    padding: 5px;
`

export const TitleUser = styled.h3`
    text-align: center;
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--grey-0);
`

export const SpanCpfUser = styled.span`
    font-size: var(--font-size-5);
    font-weight: 600;
    color: var(--grey-0);
`

export const ButtonEditUser = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background-color: var(--yellow-1);
    padding: 5px 30px; 
    font-size: var(--font-size-5);
    font-weight: 600;
    color: var(--grey-0);
    margin-top: 15px;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`