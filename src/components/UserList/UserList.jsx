import { useEffect, useState } from 'react';
import { getUsersApi, changeUserApi } from 'Api/Users';
// import { ReactSVG } from 'react-svg';
import { UserCard } from 'components/UserCard/UserCard';
import mainPick from '../../images/picture2 1.png';
import logo from '../../images/Logo.png';
import { List, Item, Logo, Line, MainPick } from './UserList.styled';

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersApi().then(data => {
      setUsers(data);
    });
  }, []);

  const onClickPlus = id => {
    const newUsers = users.map(user =>
      user.id === id
        ? { ...user, followers: user.followers + 1, add: true }
        : user
    );

    const userForUpdate = users.find(user => user.id === id);

    const change = {
      add: true,
      followers: userForUpdate.followers + 1,
    };

    setUsers(newUsers);
    changeUserApi(id, change);
  };

  const onClickMinus = id => {
    console.log(id);
    const newUsers = users.map(user =>
      user.id === id
        ? { ...user, followers: user.followers - 1, add: false }
        : user
    );
    const userForUpdate = users.find(user => user.id === id);

    const change = {
      add: false,
      followers: userForUpdate.followers - 1,
    };

    setUsers(newUsers);
    changeUserApi(id, change);
  };

  return (
    <List>
      {users.map(item => {
        return (
          <Item key={item.id}>
            <Logo src={logo} alt="logo" />
            <MainPick src={mainPick} alt="mainpicture" />
            <Line></Line>
            <UserCard
              users={item}
              onClickPlus={onClickPlus}
              onClickMinus={onClickMinus}
            />
          </Item>
        );
      })}
    </List>
  );
};
