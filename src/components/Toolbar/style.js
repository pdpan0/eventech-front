import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 67px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-top: var(--primary-color) solid 13.04px;
    z-index: 1000;
`;

export const BackgroundLogo = styled.div`
    position: fixed;
    align-items: center;
    width: 100px;
    height: 83px;
    top: 0px;
    left: 67px;
    background: var(--secondary-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
    padding: .3rem;

    img{
        width: 100%;
        height: 100%;
    }
    
`