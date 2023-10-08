import styled from 'styled-components'

export const TitleForms = styled.h2`
    font-size: var(--font-title-1);
    font-weight: 600;
    color: var(--grey-0);
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 120px;
    margin-bottom: 35px;

    @media(max-width: 800px){
        font-size: var(--font-title-2);
    }

    @media(max-width: 500px) {
        font-size: var(--font-size-1);
        text-align: center;
    }
`