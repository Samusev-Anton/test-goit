import { FooterLink } from 'components/Footer/Footer.styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const GitHubIconStyle = () => (
  <FooterLink
    href="https://github.com/Samusev-Anton"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <GitHubIcon
      sx={{
        width: '33px',
        height: '33px',
        fill: '#fff',
      }}
    />
  </FooterLink>
);

export const LinkedInIconStyle = () => (
  <FooterLink
    href="https://www.linkedin.com/in/antonsamusiev/"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <LinkedInIcon
      sx={{
        width: '39px',
        height: '39px',
        fill: '#fff',
      }}
    />
  </FooterLink>
);
