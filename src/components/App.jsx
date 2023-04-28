import { UsersList } from './UserList/UserList';

export const App = () => {
  return (
    <>
      <UsersList />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    </>
  );
};
