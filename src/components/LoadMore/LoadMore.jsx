import { Btn } from './LoadMore.styled';

export const LoadMore = ({ loadMore, isCompleted }) => {
  return (
    <>
      {!isCompleted && (
        <Btn onClick={loadMore} type="button">
          Load More
        </Btn>
      )}
    </>
  );
};
