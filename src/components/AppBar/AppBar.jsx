import { Wrapper, Marv, Container, Main, Follows } from './AppBar.styled';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import Marvel from '../../images/[CITYPNG.COM]Marvel Studios White Logo PNG Image - 2774x700.png';

export const AppBar = () => {
  return (
    <Wrapper>
      <Container>
        <Link to='/'>
          <Main src={Logo} alt="Logo" />
        </Link>
        <Marv src={Marvel} alt="Marvel Studios" />
        <Follows to="follows">follows</Follows>
      </Container>
    </Wrapper>
  );
};
