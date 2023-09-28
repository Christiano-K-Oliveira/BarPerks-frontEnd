import styled from 'styled-components'


export const LinkLog = styled.a`
    display: flex;
    margin: 0 auto;
    gap: 0 8px;
    font-size: var(--font-size-3);
    font-weight: 300;
    color: var(--grey-0);
    border-bottom: 2px solid transparent;
    transition: 0.3s ease;

    &:hover{
        border-bottom: 2px solid var(--grey-0);
        transition: 0.3s ease;
    }
`

export const Strong = styled.strong`
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--grey-0);
`