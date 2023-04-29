import { FooterTitle, FooterOwner, FooterWrap } from './Footer.styled';
// import {
//   GitHubIconStyle,
//   LinkedInIconStyle,
// } from 'components/icons/icons.styled';

export const Footer = () => {
  return (
    <FooterWrap>
      <FooterTitle>
        Powered and designed by <FooterOwner>Samusiev Anton</FooterOwner>
      </FooterTitle>
      <div>
        {/* <GitHubIconStyle />
        <LinkedInIconStyle /> */}
      </div>
    </FooterWrap>
  );
};
