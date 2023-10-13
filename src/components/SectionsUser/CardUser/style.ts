import styled from "styled-components"

export const ItemList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey-5);
    max-width: 100%;
    width: 258px;
    height: 320px;
    border-radius: 8px;
    padding: 15px;

    div{
        display: flex;
        flex-direction: column;
    }
`

export const FigureUser = styled.figure`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
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
    font-size: var(--font-size-2);
    font-weight: 600;
    color: var(--grey-0);
`

export const SpanInfoUser = styled.span`
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
    margin-bottom: 5px;

    span{
        font-weight: 400;
        word-break: break-all;
    }
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

export const ButtonExclude = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background-color: var(--yellow-1);
    padding: 5px 30px; 
    font-size: var(--font-size-5);
    font-weight: 600;
    color: var(--grey-0);
    margin-top: 5px;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--alert-3);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`