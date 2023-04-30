import {
  FooterTitle,
  FooterOwner,
  FooterWrap,
  FooterLink,
  SocialWrapper,
} from './Footer.styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <FooterWrap>
      <FooterTitle>
        Powered and designed by <FooterOwner>Samusiev Anton</FooterOwner>
      </FooterTitle>
      <SocialWrapper>
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
      </SocialWrapper>
    </FooterWrap>
  );
};
