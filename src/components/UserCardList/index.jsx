import React from 'react';
import UserCard from '../UserCard';

class UserCardList extends React.Component {
  render() {
    const { users, toggleFriendStatus } = this.props;

    const userCards = users.map((user) => (
      <UserCard
        key={user.id}
        user={user}
        toggleFriendStatus={toggleFriendStatus}
      />
    ));

    return userCards
  }
}

export default UserCardList;
