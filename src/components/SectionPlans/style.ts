import styled from 'styled-components'

export const SectionAllPlans = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 80vw;
    height: 80vh;


    @media(max-width: 800px){
        height: fit-content;
    }
`

export const TitlePlans = styled.h2`
    font-size: var(--font-size-1);
    font-weight: 700;
    color: var(--grey-0);
    margin-top: 30px;

    @media(max-width: 800px){
        font-size: var(--font-size-2);
    }
`

export const ListPlans = styled.ul`
    display: flex;
    margin-top: 40px;
    gap: 100px;

    @media(max-width: 800px){
        flex-direction: column;
        gap: 30px;
        margin-top: 20px;
    }
`

export const ItemPlan = styled.li`
    display: flex;
    flex-direction: column;
    background-color: var(--yellow-1);
    width: 300px;
    height: 320px;
    padding: 20px 40px;

    @media(max-width: 800px){
        width: 80vw;
        height: 70vh;
        align-items: center;
    }
`

export const TitlePlan = styled.h3`
    font-size: var(--font-title-2);
    font-weight: 700;
    color: var(--grey-0);
    margin-top: 20px;
`

export const SpanLight = styled.span`
    display: flex;
    font-size: var(--font-size-5);
    font-weight: 300;
    color: var(--grey-0);
`

export const LinkStartBlack = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-5);
    font-weight: 700;
    color: var(--white-fixed);
    background-color: var(--grey-0);
    border-radius: 30px;
    width: 120px;
    padding: 10px;
    transition: 0.3s ease;
    margin: 20px 0;
    border: 2px solid transparent;
    margin-top: 30px;

    &:hover{
        background-color: var(--white-fixed);
        color: var(--grey-0);
        transition: 0.3s ease;
    }
`

export const LinkStartWhite = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-5);
    font-weight: 700;
    color: var(--grey-0);
    background-color: var(--white-fixed);
    border-radius: 30px;
    width: 120px;
    padding: 10px;
    transition: 0.3s ease;
    margin: 20px 40px;
    border: 2px solid transparent;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }
`

export const DivPrice = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 5px;
`

export const SpanSignPrice = styled.span`
    color: var(--gray-0);
    font-weight: 700;
    font-size: var(--font-size-2);
`

export const SpanNumberPrice = styled.span`
    color: var(--gray-0);
    font-weight: 700;
    font-size: var(--font-title-2);
    margin: 2px 0;
`

export const DivBoxBlack = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 55%;
    background-color: var(--grey-0);
    padding: 20px 40px;
`

export const SpanBestCost = styled.span`
    display: flex;
    justify-content: center;
    color: var(--grey-0);
    background-color: var(--yellow-1);
    padding: 5px;
    font-size: var(--font-size-5);
    font-weight: 600;
    margin-top: -30px;

`