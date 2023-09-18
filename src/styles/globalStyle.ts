import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Space';
    }

    ul, ol{
        list-style: none;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    :root{
        --grey-0: #000000
        --grey-1: #212529
        --grey-2: #495057
        --grey-3: #868E96
        --grey-4: #ADB5BD
        --grey-5: #CED4DA
        --grey-6: #DEE2E6
        --grey-7: #E9ECEF
        --grey-8: #F1F3F5
        --grey-9: #F8F9FA
        --grey-10: #FDFDFD
        --white-fixed: #FFFFFF

        --alert-1: #CD2B31
        --alert-2: #FDD8D8
        --alert-3: #FFE5E5
        --sucess-1: #18794E
        --sucess-2: #CCEBD7
        --sucess-3: #DDF3E4

        --yellow-1: #EDB548

        --font-size-1: 24px;
        --font-size-2: 20px;
        --font-size-3: 18px;
        --font-size-4: 16px;
        --font-size-5: 14px;
        --font-size-6: 12px;

        font-size: 60%;
    }

    @media(min-width: 800px) {
        :root{
            font-size: 62.5%;
        }
    }
`

export default GlobalStyle