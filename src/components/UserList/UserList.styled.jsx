import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  width: 1280px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Item = styled.li`
  position: relative;
  list-style-type: none;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Line = styled.div`
  border: 4px solid #ebd8ff;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const MainPick = styled.img`
  padding: 28px 36px 0 36px;
  margin-bottom: 18px;
`;
