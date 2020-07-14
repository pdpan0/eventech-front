import React from 'react';
import { Background, BackgroundLogo } from './style';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Toolbar = () => (
    <Background>
        <BackgroundLogo><Link to={"/"}><img src={logo} alt="Eventech" /></Link></BackgroundLogo>
    </Background>
)

export default Toolbar;
