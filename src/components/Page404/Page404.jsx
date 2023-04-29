// import svg from '../../images/bro.svg';
import { NotFoundPageImg, Wraper, TextWrap } from './Page404.styled';
// import { MainPageTitle } from '../MainPageTitle/MainPageTitle/MainPageTitle';

export const NullPage = () => {
  return (
    <>
      {/* <Wraper>
        <MainPageTitle />
        <NotFoundPageImg src={svg} alt="peopleWithTree" />
      </Wraper> */}
      <TextWrap>
        <h2>We are sorry,</h2>
        <p>but the page you were looking for can’t be found..</p>
      </TextWrap>
    </>
  );
};
