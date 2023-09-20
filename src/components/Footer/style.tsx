import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterDouble = styled.footer`
    display: flex;
    width: 100vw;
    flex-direction: column;
    margin-top: 80px;
`

export const SectionInfo = styled.section`
    display: flex;
    background-color: var(--yellow-1);
    width: 100vw;
    height: fit-content;
`

export const DivBoxSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 80vw;
` 

export const TitleFooter = styled.h1`
    font-size: var(--font-size-1);
    font-weight: 600;
    color: var(--grey-0);
`

export const DivBoxAllInfo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    @media(max-width: 800px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
`

export const DivBoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    max-width: 200px;
    margin-top: 20px;
    
    @media(max-width: 800px) {
        min-width: 80vw;
        height: fit-content;
    }
`

export const DivBoxInfoUnique = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 800px) {
    }
`

export const TitleInfo = styled.h3`
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
    
    @media(max-width: 800px) {
        margin-top: 10px;
    }
`

export const ParagraphInfo = styled.p`
    font-size: var(--font-size-4);
    font-weight: 300;
    color: var(--grey-0);
`

export const DivBoxCopyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: var(--grey-0);
    gap: 10px;
`

export const TitleCopyright = styled.h2`
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--white-fixed);
`

export const LinkInfo = styled(Link)`
    display: flex;
    text-decoration: underline;
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 300;
    cursor: pointer;
`

export const LinkIcon = styled(Link)`
    cursor: pointer;
`

export const ImageIcon = styled.img`
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin-top: 5px;

    @media(max-width: 800px){
        margin-top: 15px;
    }
`