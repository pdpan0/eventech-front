import React, { useState } from 'react';
import { Wrapper, Info, Title, Subtitle, PerfilImage } from './styles';
import userImage from '../../assets/images/user.png';

export const NavLoginInfo = () => {
  const [isLogged] = useState(localStorage.getItem('isAuthenticated'));

  if (isLogged) {
    return (
      <Wrapper>
        <Info>
          <Title to="/">{localStorage.getItem('Username')}</Title>
          <Subtitle to="/"><h5>Sair</h5></Subtitle>
        </Info>
        <PerfilImage src={userImage} alt="Perfil Image" />
      </Wrapper>
    )  
  }

  return (
    <Wrapper>
      <PerfilImage src={userImage} alt="Perfil Image" />
      <Info>
        <Title to="/">Entrar</Title>
        <Subtitle to="/">Não possui cadastro?</Subtitle>
      </Info>
    </Wrapper>
  )

}

export default NavLoginInfo;