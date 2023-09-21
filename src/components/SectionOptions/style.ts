import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SectionTwoOptions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 55vh;
    background-color: var(--white-fixed);
    margin-top: 200px;

    @media(max-width: 800px){
        margin-top: 150px;
    } 
`

export const Title = styled.h2`
    font-size: var(--font-size-1);
    font-weight: 600;
    color: var(--grey-0);
    margin-bottom: 30px;
`

export const DivBox = styled.div`
    display: flex;
    gap: 50px;

    @media(max-width: 800px){
        flex-direction: column;
        gap: 20px;
    }
`

export const LinkOption = styled(Link)`
    display: flex;
    justify-content: center;
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
    border: 2px solid var(--grey-0);
    border-radius: 30px;
    background-color: var(--yellow-1);
    width: 200px;
    padding: 5px;
    margin-bottom: 10px;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--yellow-1);
        transition: 0.3s ease;
    }
`

