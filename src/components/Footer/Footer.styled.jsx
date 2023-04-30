import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* max-width: 1280px; */
  padding: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const FooterTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
`;

export const FooterLink = styled.a`
  fill: white;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;

export const FooterOwner = styled.span`
  color: white;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
`;
