import styled from 'styled-components'

export const SectionProgramsLoyalty = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: var(--white-fixed);
`

export const DivBoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
    margin: 0 auto;
    margin-top: 50px;
`

export const TitlePrograms = styled.h2`
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
`

export const ParagraphPrograms = styled.p`
    font-size: var(--font-size-4);
    font-weight: 300;
    color: var(--grey-0);
    width: 100%;
    margin-top: 15px;
`

export const ListPrograms = styled.ul`
    display: flex;
    width: 80vw;
    margin: 0 auto;
    justify-content: center;
    margin-top: 60px;

    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const ItemListProgram = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 40px;

    @media(max-width: 370px){
        gap: 10px;
    }

    @media(max-width: 800px){
        width: 80vw;
        gap: 20px;
    }

    @media(min-width: 1100px){
        gap: 0px;
    }

    @media(min-width: 1250px){
        gap: 15px;
    }
`

export const TitleItemList = styled.h3`
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--grey-0);
    width: 23vw;
    text-align: center;

    @media(max-width: 800px) {
        width: 80vw;
    }
`

export const PhotoItemList = styled.img`
    width: 23vw;
    height: 200px;

    @media(max-width: 800px) {
        width: 80vw;
    }
`

export const ParagraphItemList = styled.p`
    font-size: var(--font-size-4);
    font-weight: 300;
    color: var(--grey-0);
    width: 23vw;
    text-align: justify;

    @media(max-width: 800px){
        width: 80vw;
    }
`