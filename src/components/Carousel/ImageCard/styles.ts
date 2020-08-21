import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  url: string
}

export const ImageCardContainer = styled(Link)<Props>`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 100%;
  height: 367px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
`;
