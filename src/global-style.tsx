import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import "assets/styles/swiper.css";
import "antd/dist/antd.css";
import "assets/styles/dropdown.css";

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  /* Spoqa Han Sans Neo 폰트 */
  @font-face {
    font-family: 'neo-light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'neo-regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'neo-medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'neo-bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  /* Reset style */
  * {
    box-sizing: border-box !important;
  }
  html, body, #root {
    width: 100%;
    height: 100%;

    font-family: 'neo-regular', sans-serif;
    font-size: 14px;
    line-height: 1.8;
    color: #38323C;
    background-color: #F4F4F4;

    margin: 0;
    padding: 0;

    overflow: auto;
  } 
  span {
    display: inline-block;
  }
  a {
  display: block;

  color: inherit;
  text-decoration: inherit;
  }
  img {
    vertical-align: middle;
  }
  li {
    list-style: none;
  }
  address,
  em,
  i {
    font-style: normal;
  }
  /* PlaceHolder */
  ::-webkit-input-placeholder {
  }
  ::-moz-placeholder {
  }
  :-ms-input-placeholder {
  }
  :-moz-placeholder {
  }
`;

export default GlobalStyles;
