import React from 'react';
import UserCard from '../UserCard';

class UserCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: 'John Doe', gender: 'male' },
        { id: 2, name: 'Jane Smith', gender: 'female' },
        { id: 3, name: 'Alice Johnson', gender: 'female' },
        { id: 4, name: 'Michael Brown', gender: '' },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return (
      <>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            gender={user.gender}
          />
        ))}
      </>
    );
  }
}

export default UserCardList;
