import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}

body {
    width: 100vw;
    height: 75vw;
    display: flex;
    justify-content: center;
    background: linear-gradient(#019ee4, #ffffff);
}
`;

export default Global;