import styled from 'styled-components'

export const Button = styled.button`
    background-color: var(--grey-0);
    color: var(--white-fixed);
    width: 100%;
    height: 50px;
    font-size: var(--font-size-3);
    font-weight: 600;
    border: 2px solid var(--grey-0);
    transition: 0.3s ease;
    margin-top: 15px;
    margin-bottom: 5px;

    &:hover{
        background-color: var(--white-fixed);
        color: var(--grey-0);
        transition: 0.3s ease;
    }
`