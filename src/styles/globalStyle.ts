import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Space Grotesk', sans-serif;        
        overflow-x: hidden;
    }

    ul, ol{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
    }

    :root{
        --grey-0: #000000;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4DA;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;
        --white-fixed: #FFFFFF;

        --alert-1: #CD2B31;
        --alert-2: #ff0000;
        --alert-3: #FF1B0E;
        --sucess-1: #18794E;
        --sucess-2: #CCEBD7;
        --sucess-3: #DDF3E4;

        --yellow-1: #EDB548;

        --font-size-1: 24px;
        --font-size-2: 20px;
        --font-size-3: 18px;
        --font-size-4: 16px;
        --font-size-5: 14px;
        --font-size-6: 12px;
        --font-size-7: 10px;

        --font-title-1: 32px;
        --font-title-2: 28px;
        --font-title-recover: 42px;

        font-size: 85%;
    }

  *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #DFE9EB;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #DFE9EB;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #DFE9EB;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--grey-4);
  }

  *::-webkit-scrollbar-thumb:hover {
      background-color: var(--grey-4);
  }

  *::-webkit-scrollbar-thumb:active {
      background-color: var(--grey-3);
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }

`

export default GlobalStyle