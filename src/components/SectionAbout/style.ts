import styled from 'styled-components'


export const SectionAbouting = styled.section`
    display: flex;
    width: 100vw;
    flex-direction: column;
    margin-top: 20px;
`

export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
`

export const TitleAbout = styled.h2`
    font-size: var(--font-size-2);
    font-weight: 700;
    color: var(--grey-0);
`

export const SubtitleAbout = styled.h3`
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
    margin-bottom: 15px;

    @media(max-width: 800px){
        text-align: center;
        margin-top: 5px;
    }
`

export const ParagraphAbout = styled.p`
    font-size: var(--font-size-4);
    font-weight: 300;
    color: var(--grey-0);
    text-align: justify;
    margin-bottom: 25px;
    display: flex;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 15px;

    @media(max-width: 800px){
        width: 100%;
    }
`

export const ImageBar = styled.img`
    display: flex;
    width: 100%;
    height: 40vh;
    margin-bottom: -80px;

    @media(max-width: 800px){
        height: 35vh;
    }
`