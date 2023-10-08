import styled from 'styled-components'

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: var(--grey-0);
    padding: 10px;
    margin-top: 20px;
`

export const TitleCopyright = styled.h2`
    font-size: var(--font-size-2);
    font-weight: 600;
    color: var(--white-fixed);

    @media(max-width: 800px){
        font-size: var(--font-size-4);
    }
`