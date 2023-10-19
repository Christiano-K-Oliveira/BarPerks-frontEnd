import styled from "styled-components";

export const SectionQrCode = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 20px;
    min-height: 69vh;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 85vw;
        margin: 0 auto;

        h2{
            color: var(--grey-0);
            font-size: var(--font-title-2);
            font-weight: 700;

            @media (max-width: 800px) {
                font-size: var(--font-size-1);
            }
        }
    
        h3{
            color: var(--grey-0);
            font-size: var(--font-size-1);
            font-weight: 600;
            text-align: justify;
            margin-top: 30px;

            @media (max-width: 800px) {
                font-size: var(--font-size-3);
            }
        }

        form{
            display: flex;
            flex-direction: column;

            input{
                padding: 8px;
                width: 450px;
                height: 28px;
                border-radius: 24px;
                background-color: var(--grey-6);
                outline: none;
                border: 2px solid transparent;
                color: var(--grey-0);
                font-size: var(--font-size-4);
                font-weight: 600;
                transition: 0.3s ease;
                max-width: 100%;
                margin-top: 10px;
                margin-bottom: 40px;
                text-align: center;
    
                &:focus{
                    border: 2px solid var(--grey-0);
                }
            
                &::placeholder{
                    text-align: center;
                }
            
                @media(max-width: 800px){
                    width: 100%;
                }
            }
    
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
                background-color: var(--yellow-1);
                color: var(--grey-0);
                font-size: var(--font-size-4);
                font-weight: 600;
                border-radius: 12px;
                padding: 5px;
                transition: 0.3s ease;

                &:hover{
                    color: var(--white-fixed);
                    background-color: var(--grey-0);
                    transition: 0.3s ease;
                }
            }
        }

        p{
            color: var(--grey-0);
            font-size: var(--font-size-3);
            font-weight: 600;
            margin-top: 30px;

            span{
                color: #1fde00;
            }
        }

    }
`