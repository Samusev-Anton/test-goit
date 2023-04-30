import styled from 'styled-components';
import background from '../images/1550992813_25.jpg';

export const Home = () => {
  return (
    <Picture>
      <Title> Hey! Hello!</Title>
      <Text>
        You are on a site where superheroes share stories about their exploits
      </Text>
    </Picture>
  );
};

const Picture = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 50px;
  width: 1200px;
  height: 700px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 24px;
  color: white;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: 600;
  line-height: 24px;
  color: white;
`;
