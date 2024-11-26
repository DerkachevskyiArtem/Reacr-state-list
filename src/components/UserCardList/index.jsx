import React from 'react';
import UserCard from '../UserCard';

class UserCardList extends React.Component {
  render() {
    const { users, toggleFriendStatus } = this.props;

    return (
      <>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            gender={user.gender}
            isFriend={user.isFriend}
            toggleFriendStatus={toggleFriendStatus}
          />
        ))}
      </>
    );
  }
}

export default UserCardList;
