import styled from "styled-components";

export const ItemPub = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: var(--white-fixed);
    padding: 15px;
    -webkit-box-shadow: 0px 1px 8px 0px #000000; 
    box-shadow: 0px 1px 8px 0px #000000;
`

export const FigurePub = styled.figure`
    display: flex;
    align-items: center;
    gap: 10px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: black;

        @media(max-width: 400px){
            width: 35px;
            height: 35px;
        }
    }

    div{
        display: flex;
        flex-direction: column;

        h3{
            color: var(--grey-0);
            font-size: var(--font-size-3);
            font-weight: 600;

            @media(max-width: 800px){
                font-size: var(--font-size-4);
            }

            @media(max-width: 400px){
                font-size: var(--font-size-6);
            }
        }

        span{
            color: var(--grey-0);
            font-size: var(--font-size-4);
            font-weight: 600;

            @media(max-width: 800px){
                font-size: var(--font-size-5);
            }

            @media(max-width: 400px){
                font-size: var(--font-size-6);
            }
        }
    }
`

export const ButtonRescue = styled.button`
    background-color: var(--yellow-1);
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 600;
    width: 90px;
    height: 25px;
    margin-left: 25px;
    margin-top: 5px;
    transition: 0.3s ease;

    &:hover{
        background-color: var(--grey-0);
        color: var(--white-fixed);
        transition: 0.3s ease;
    }

    @media(max-width: 800px){
        font-size: var(--font-size-6);
        width: 70px;
    }

    @media(max-width: 400px){
        margin-left: 10px;
    }
`