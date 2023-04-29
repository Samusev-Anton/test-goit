import { useState } from 'react';
import { Wrapper, FilterBtn } from './FilterButton.styled';

export const FilterButton = ({ filterFollows }) => {
  const [activeFilterBtn, setActiveFilterBtn] = useState({
    btnAll: true,
    btnFollow: false,
    btnNotFollow: false,
  });

  const onHandleClick = e => {
    const id = e.currentTarget.id;
    filterFollows(id);
    switch (id) {
      case 'btnAll':
        setActiveFilterBtn({
          btnAll: true,
          btnFollow: false,
          btnNotFollow: false,
        });
        break;

      case 'btnFollow':
        setActiveFilterBtn({
          btnAll: false,
          btnFollow: true,
          btnNotFollow: false,
        });
        break;

      case 'btnNotFollow':
        setActiveFilterBtn({
          btnAll: false,
          btnFollow: false,
          btnNotFollow: true,
        });
        break;

      default:
        break;
    }
  };

  return (
    <Wrapper>
      <FilterBtn
        id="btnAll"
        onClick={onHandleClick}
        style={
          !activeFilterBtn.btnAll
            ? { backgroundColor: '#ebd8ff' }
            : { backgroundColor: '#5cd3a8' }
        }
      >
        All Tweets
      </FilterBtn>
      <FilterBtn
        id="btnFollow"
        onClick={onHandleClick}
        style={
          !activeFilterBtn.btnFollow
            ? { backgroundColor: '#ebd8ff' }
            : { backgroundColor: '#5cd3a8' }
        }
      >
        Follow
      </FilterBtn>
      <FilterBtn
        id="btnNotFollow"
        onClick={onHandleClick}
        style={
          !activeFilterBtn.btnNotFollow
            ? { backgroundColor: '#ebd8ff' }
            : { backgroundColor: '#5cd3a8' }
        }
      >
        Following
      </FilterBtn>
    </Wrapper>
  );
};
