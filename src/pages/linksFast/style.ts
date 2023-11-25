import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
    padding-top: 10px;
    transform: translateY(80px);
`

export const SectionTerms = styled.section`
    display: flex;
    flex-direction: column;
`

export const DivTitle = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100vw;
    height: 35vh;
    background-color: var(--yellow-1);
    margin-bottom: 20px;
    padding-bottom: 20px;

    h2{
        display: flex;
        width: 80vw;
        margin: 0 auto;
        color: var(--grey-0);
        font-size: var(--font-title-2);
        font-weight: 600;

        @media(max-width: 410px){
            font-size: var(--font-size-1);
        }
    }
`

export const Paragraph = styled.p`
    display: flex;
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 300;
    margin: 0 auto;
    text-align: justify;
    width: 80vw;
    margin-bottom: 20px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80vw;
    gap: 5px;
    list-style: inside;
    margin-bottom: 30px;

    li{
        color: var(--grey-0);
        font-size: var(--font-size-3);
        font-weight: 300;
    }
`

export const DivBoxSubject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    width: 80vw;
    margin-bottom: 20px;

    h3{
        color: var(--grey-0);
        font-size: var(--font-size-3);
        font-weight: 600;
    }
    p{
        color: var(--grey-0);
        font-size: var(--font-size-3);
        font-weight: 300;
    }
`