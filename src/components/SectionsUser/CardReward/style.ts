import styled from "styled-components";

export const ItemListReward = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;

    @media(max-width: 800px){
        flex-direction: row;
        border-radius: 12px;
        border: 2px solid var(--grey-0);
        margin: 0 20px;
        padding: 10px 0px;
        height: 33vh;
        max-width: 430px;
    }
`

export const DivBox = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    background-color: var(--white-fixed);

    @media(max-width: 800px){
        display: none;
    }
`

export const DivBoxGray = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: var(--grey-6);

    @media(max-width: 800px){
        display: none;
    }
`

export const TitleInfo = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-fixed);
    font-size: var(--font-size-5);
    font-weight: 700;
    width: 200px;
    background-color: var(--grey-2);
    padding: 5px 20px;
    margin-left: 30px;
    text-align: center;

    @media(max-width: 800px){
        font-size: var(--font-size-5);
        width: 120px;
    }

    @media(max-width: 1200px){
        width: 125px;
    }

`

export const TitleInfoMobile = styled.h3`
    display: flex;
    text-align: center;
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 700;

`

export const SpanInfo = styled.span`
    display: flex;
    justify-content: center;
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 400;
    padding: 5px 0px;
    width: 200px;
    margin-left: 30px;
    text-align: center;

    @media(max-width: 800px){
        width: 50%;
        font-size: var(--font-size-5);
    }

    @media(max-width: 1200px){
        width: 125px;
    }
`

export const SpanInfoMobile = styled.span`
    display: flex;
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 400;
    margin-left: 10px;
`

export const DivBoxMobile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--white-fixed);
    padding: 0 20px;

    @media(min-width: 800px){
        display: none;
    }
`

export const DivBoxInfoMobile = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    @media(min-width: 800px){
        display: none;
    }
`