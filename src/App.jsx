import React from 'react';
import UserDashboard from './components/UserDashboard';
import Clicker from './components/Clicker';
import DataLoader from './components/DataLoader';
import './App.css';

function App() {
  const renderUser = ({ users, isLoading, error }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    if (!users || users.length === 0) {
      return <div>No users found.</div>;
    }

    return (
      <article className="cardContainer">
        {users.map((user) => (
          <article key={user.id} className="userCard">
            <h2 className="userCardHeading">{user.name}</h2>
            <p className="userCardId">Id: {user.id}</p>
            <p className="userCardGender">
              Gender: {user.gender || 'Not Specified'}
            </p>
          </article>
        ))}
      </article>
    );
  };

  const getUsers = () => {
    const usersPromise = fetch('/public/users.json').then((res) => res.json());

    return usersPromise;
  };

  return (
    <>
      <UserDashboard />
      <Clicker />
      <DataLoader render={renderUser} loadData={getUsers} />
    </>
  );
}

export default App;
