// import { ReactSVG } from 'react-svg';
import { UserCard } from 'components/UserCard/UserCard';
import mainPick from '../../images/picture2 1.png';
import logo from '../../images/Logo.png';
import { List, Item, Logo, Line, MainPick } from './UserList.styled';

export const UsersList = ({ users, onClickMinus, onClickPlus }) => {
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
