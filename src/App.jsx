import React, { Fragment } from 'react';
import UserCard from './components/UserCard/index.jsx';

function App() {
  const users = [
    { id: 1, name: 'John Doe', gender: 'male' },
    { id: 2, name: 'Jane Smith', gender: 'female' },
    { id: 3, name: 'Alice Johnson', gender: 'female' },
    { id: 4, name: 'Michael Brown' },
  ];

  const userCards = users.map((user) =>
    React.createElement(UserCard, {
      id: user.id,
      name: user.name,
      gender: user.gender,
    })
  );

  return React.createElement(Fragment, null, ...userCards);
}

export default App;