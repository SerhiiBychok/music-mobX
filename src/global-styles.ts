import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
    @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
    
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i,
center, dl, dt, dd, ol, ul, li, form, label, caption, table, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
}

    html {
        font-size: 16px;
    }
    a {
  color: inherit;
  text-decoration: none;
}

img {
  border: 0;
  vertical-align: middle;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}

a:focus {
  outline: 0;
  text-decoration: none;
}

article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
  display: block;
}

button {
  padding: 0;
  background: none;
  font: inherit;
  white-space: nowrap;
}

button:focus {
  outline: none;
}

ol, ul, nav, li {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::placeholder {
    color: #878787;
    opacity: 1;
}

:-ms-input-placeholder {
    color: #878787;
}

::-ms-input-placeholder {
    color: #878787;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
`

export default GlobalStyles
