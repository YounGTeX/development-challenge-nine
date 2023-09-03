import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(#019ee4, #97d7f4);
}
`;

export default Global;