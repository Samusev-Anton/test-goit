import svg from '../../images/bro.svg';
import { NotFoundPageImg, Wraper, TextWrap } from './Page404.styled';
// import { MainPageTitle } from '../MainPageTitle/MainPageTitle/MainPageTitle';

export const NullPage = () => {
  return (
    <>
      <Wraper>
        {/* <MainPageTitle /> */}
        <NotFoundPageImg src={svg} alt="peopleWithTree" />
        <TextWrap>
          <h2 style={{ color: 'white' }}>We are sorry,</h2>
          <p style={{ color: 'white' }}>
            but the page you were looking for can’t be found..
          </p>
        </TextWrap>
      </Wraper>
    </>
  );
};
