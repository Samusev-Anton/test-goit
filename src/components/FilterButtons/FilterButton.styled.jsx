import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const FilterBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 14px 56px;
  color: #373737;
  background-color: #ebd8ff;
  &:hover {
    box-shadow: 0px 1px 12px 5px rgba(230, 207, 207, 0.53);
  }
  cursor: pointer;
`;
