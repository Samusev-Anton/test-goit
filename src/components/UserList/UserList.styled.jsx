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
  gap: 20px;
`;

export const Item = styled.li`
  position: relative;
  list-style-type: none;
  background-color: #5736a3;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;
export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Line = styled.div`
  border: 4px solid #ebd8ff;
  position: relative;
`;

export const MainPick = styled.img`
  padding: 28px 36px 0 36px;
  margin-bottom: 18px;
`;
