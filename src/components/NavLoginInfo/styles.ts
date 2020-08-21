import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;

  @media (max-width: 61.25em) {
    display: none;
  }
`;
export const PerfilImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 0.8rem;
  border: 0.3rem solid var(--primary-color);
  border-radius: 50rem;
  padding: 0.5rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  text-align: start;
`;

export const Title = styled(Link)`
  color: var(--third-color);
  font-size: 1.8rem;
  text-decoration: none;
`;
export const Subtitle = styled(Link)`
  color: var(--secondary-color);
  font-size: 1.5rem;
  text-decoration: none;
`;
