import { useEffect, useState } from 'react';
import { slice } from 'lodash';
import styled from 'styled-components';

import { getUsersApi, changeUserApi } from 'Api/Users';
import { UsersList } from 'components/UserList/UserList';
import { FilterButton } from 'components/FilterButtons/FilterButton';
import { LoadMore } from 'components/LoadMore/LoadMore';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [follows, setFollows] = useState(null);

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(3);
  const initiaUsers = slice(users, 0, index);
  const initialFollows = slice(follows, 0, index);

  const followsLength = follows && index + 3 >= follows.length;

  const loadMore = () => {
    setIndex(index + 3);
    if (index + 3 >= users.length || followsLength) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    getUsersApi().then(data => {
      setUsers(data);
    });
  }, []);

  const filterFollows = id => {
    setIndex(3);
    setIsCompleted(false);
    switch (id) {
      case 'btnAll':
        setFollows(users);
        break;

      case 'btnFollow':
        setFollows(users.filter(user => user.add === false));
        break;

      case 'btnNotFollow':
        setFollows(users.filter(user => user.add === true));
        break;
      default:
        break;
    }
    return follows;
  };

  const onClickPlus = id => {
    const newUsers = users.map(user =>
      user.id === id
        ? { ...user, followers: user.followers + 1, add: true }
        : user
    );
    if (follows) {
      const newFollows = follows.map(user =>
        user.id === id
          ? { ...user, followers: user.followers + 1, add: true }
          : user
      );
      setFollows(newFollows);
    }

    const userForUpdate = users.find(user => user.id === id);

    const change = {
      add: true,
      followers: userForUpdate.followers + 1,
    };

    setUsers(newUsers);
    changeUserApi(id, change);
  };

  const onClickMinus = id => {
    const newUsers = users.map(user =>
      user.id === id
        ? { ...user, followers: user.followers - 1, add: false }
        : user
    );
    if (follows) {
      const newFollows = follows.map(user =>
        user.id === id
          ? { ...user, followers: user.followers - 1, add: false }
          : user
      );
      setFollows(newFollows);
    }

    const userForUpdate = users.find(user => user.id === id);

    const change = {
      add: false,
      followers: userForUpdate.followers - 1,
    };

    setUsers(newUsers);
    changeUserApi(id, change);
  };

  return (
    <Wrapper>
      <FilterButton filterFollows={filterFollows} />
      {!follows ? (
        <UsersList
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
          users={initiaUsers}
        />
      ) : (
        <UsersList
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
          users={initialFollows}
        />
      )}
      <LoadMore loadMore={loadMore} isCompleted={isCompleted} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 110px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 140px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
