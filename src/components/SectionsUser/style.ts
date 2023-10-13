import styled from "styled-components"

export const SectionUser = styled.section`
    display: flex;
    flex-direction: column;
    width: 81vw;
    margin: 0 auto;
    margin-top: 25px;
    min-height: 68vh;
`

export const Title = styled.h2`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--font-title-2);
    font-weight: 600;
    color: var(--grey-0);
    margin-bottom: 5px;

    @media(max-width: 800px){
        font-size: var(--font-size-1);
    }
    @media(max-width: 339px){
        font-size: 22px;
    }
`

export const ListCards = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 12px;
    width: 100%;
    padding: 10px 0;
`

export const SpanName = styled.span`
    background-color: var(--yellow-1);
    color: var(--grey-0);
    width: 300px;
    max-width: 100%;
    padding: 5px 15px;
    text-align: center;
    font-size: var(--font-size-4);
    font-weight: 600;
    margin-bottom: 30px;
`

export const ListCardsRewards = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    margin: 30px 0px;
`

export const DivSearchPub = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    margin-top: 50px;

    input{
            display: flex;
            outline: none;
            border: 2px solid var(--grey-3);
            padding: 8px 10px;
            margin-top: 15px;
            color: var(--grey-0);
            font-size: var(--font-size-4);
            font-weight: 400;
            transition: 0.2s ease;
            width: 81vw;

            &:hover{
                border: 2px solid var(--grey-0);
                transition: 0.2s ease;
            }
    }

    figure{
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 85vw;

        @media(max-width: 800px){
            gap: 10px;
        }

        img{
            width: 70px;
            height: 70px;
            background-color: var(--grey-0);
            border-radius: 50%;
            padding: 5px;

            @media(max-width: 800px){
                width: 60px;
                height: 60px;
            }
        }

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            max-width: 100%;

            @media(max-width: 440px){
                margin-top: 25px;
            }

            span{
                display: flex;
                justify-content: center;
                width: 100%;
                color: var(--grey-0);
                font-size: var(--font-size-4);
                font-weight: 600;
                background-color: var(--yellow-1);
                padding: 5px 30px;

                @media(max-width: 440px){
                    padding: 5px;
                    text-align: center;
                    width: 94%;
                }
            }

            h2{
                color: var(--grey-0);
                font-size: var(--font-title-2);
                font-weight: 600;

                @media(max-width: 800px){
                    font-size: var(--font-size-1);
                }
            }
        }

    }
`

export const ListCardsPub = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
    margin-bottom: 40px;

    @media(max-width: 900px){
        justify-content: center;
    }
`