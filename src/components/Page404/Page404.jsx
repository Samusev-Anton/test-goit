import svg from '../../images/bro.svg';
import {
  NotFoundPageImg,
  Wraper,
  TextWrap,
  Title,
  Text,
} from './Page404.styled';

export const NullPage = () => {
  return (
    <>
      <Wraper>
        <NotFoundPageImg src={svg} alt="peopleWithTree" />
        <TextWrap>
          <Title style={{ color: 'white' }}>We are sorry,</Title>
          <Text style={{ color: 'white' }}>
            but the page you were looking for can’t be found..
          </Text>
        </TextWrap>
      </Wraper>
    </>
  );
};
