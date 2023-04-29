import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* max-width: 1280px; */
  padding: 12px;
  background-color: black;
`;

export const FooterTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const FooterLink = styled.a`
  fill: white;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const FooterOwner = styled.span`
  color: white;
`;
