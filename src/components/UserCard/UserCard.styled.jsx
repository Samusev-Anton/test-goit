import styled from 'styled-components';

export const ImgRound = styled.div`
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 180px;
  left: 40%;
  background: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 36px;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  margin-left: 5px;
  color: #ebd8ff;
  cursor: pointer;
`;

export const Tweets = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #ebd8ff;
  margin-bottom: 18px;
`;

export const Plus = styled.button`
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 14px 56px;
  color: #373737;
  background-color: #ebd8ff;
  cursor: pointer;
  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;

export const Minus = styled.button`
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 14px 56px;
  color: #373737;
  background-color: #5cd3a8;
  cursor: pointer;
  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;
