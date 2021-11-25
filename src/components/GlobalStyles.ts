import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol,
li {
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}

button:focus,
button:active,
input:focus,
input:active,
textarea:focus,
textarea:active {
  box-shadow: none;
}
`;

export default globalStyles;
