import { ImgRound, Stats, Text, Tweets, Plus, Minus } from './UserCard.styled';

export const UserCard = ({ users, onClickPlus, onClickMinus }) => {
  // insert coma in followers
  var num = users.followers;
  var re = /\B(?=(\d{3})+(?!\d))/g;
  var newstr = num.toString().replace(re, ',');
  console.log(num);

  return (
    <Stats>
      <ImgRound>
        <img src={users.avatar} alt={users.user} />
      </ImgRound>
      <Tweets>
        {users.tweets}
        <Text>tweets</Text>
      </Tweets>
      <Tweets>
        {newstr}
        <Text>folowers</Text>
      </Tweets>
      {!users.add ? (
        <Plus onClick={() => onClickPlus(users.id)}>follow</Plus>
      ) : (
        <Minus onClick={() => onClickMinus(users.id)}>following</Minus>
      )}
    </Stats>
  );
};
