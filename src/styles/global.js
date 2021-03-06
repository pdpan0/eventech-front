import { createGlobalStyle } from 'styled-components';
import './fonts/stylesheet.css';

const colors = {
    primary: '#1ABC9C',
    secondary: '#16A085',
    third: '#4D4D4D',
    background: '#EEEFEF' 
}

export default createGlobalStyle`    
    :root {
        --primary-color: ${colors.primary};
        --secondary-color: ${colors.secondary};
        --third-color: ${colors.third};
        --background: ${colors.background};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--background);
        font-family: 'Exo 2', sans-serif;
        font-size: 10px;
        font-weight: 400;
    }
`;