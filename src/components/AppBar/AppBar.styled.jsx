import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  padding: 30px 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 25px;
`;

export const Marv = styled.img`
  height: 40px;
`;

export const Main = styled.img`
  height: 30px;
  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;

export const Follows = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 10px 40px;
  color: #373737;
  background-color: #ebd8ff;
  cursor: pointer;
  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;
