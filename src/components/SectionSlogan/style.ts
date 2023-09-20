import styled from 'styled-components'

export const SectionSloganCompany = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: var(--yellow-1);
`

export const DivBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin: 0 auto;
    align-items: center;
    gap: 20px;

    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        gap: 60px;
    }
`

export const TitleSlogan = styled.h2`
    font-size: var(--font-size-2);
    font-weight: var(600);
    color: var(--grey-0);
    width: 200px;

    @media(max-width: 800px) {
        font-size: var(--font-size-3);
        width: 80vw;
    }
`

export const ParagraphSlogan = styled.p`
    font-size: var(--font-size-3);
    font-weight: 300;
    color: var(--grey-1);
    width: 470px;

    @media(max-width: 800px) {
        font-size: var(--font-size-4);
        width: 80vw;
    }
`