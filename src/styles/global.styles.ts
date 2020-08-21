import { createGlobalStyle } from 'styled-components';
import './font/stylesheet.css';

const colors = {
  primary: '#1ABC9C',
  secondary: '#16A085',
  third: '#333333',
  gray: '#828282',
  white: '#EEEFEF'
}

export default createGlobalStyle`    
  :root {
    --primary-color: ${colors.primary};
    --secondary-color: ${colors.secondary};
    --third-color: ${colors.third};
    --gray-text: ${colors.gray};
    --background: ${colors.white};
  }

  * {
    margin: 0;
    padding: 0;
  }
    
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
     
  html {
    box-sizing: border-box;
    font-size: 60%;
    scroll-behavior: smooth;
  }

  /* 1200px / 16px = 75em */
  @media (max-width: 75em) {
    html {
      font-size: 60%;
    }
  }

  /* 980px / 16px = 61.25em */
  @media (max-width: 61.25em) {
    html {
      font-size: 58%;
    }
  }

  /* 480px / 16px = 30em */
  @media (max-width: 30em) {
    html {
      font-size: 55%;
    }
  }

  body {
    background-color: var(--background);
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.4;
  }

  img {
    display: block;
    width: 100%;
  }
`;