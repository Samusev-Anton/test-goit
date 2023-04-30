import styled from 'styled-components';
import background from '../images/1550992813_25.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Wrapper>
      <Picture>
        <Title> Hey! Hello!</Title>
        <Text>
          You are on a site where superheroes share stories about their exploits
        </Text>
        <GoTo to="/follows">go ahead!</GoTo>
      </Picture>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 0;
  height: 100hv;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 700px;
  height: 300px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 50px;
  color: white;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: white;
`;

export const GoTo = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: white;
  text-transform: uppercase;
  text-decoration: underline;
`;
