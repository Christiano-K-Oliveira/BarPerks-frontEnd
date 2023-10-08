import styled from 'styled-components'

export const Input = styled.input`
    color: var(--gray-0);
    font-size: var(--font-size-4);
    font-size: 500;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--grey-4);
    padding: 10px 0;
    transition: 0.2s ease;
    margin-bottom: 15px;

    &:focus{
        border-bottom: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }
`