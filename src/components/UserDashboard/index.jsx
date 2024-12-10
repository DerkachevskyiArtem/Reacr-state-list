import React from 'react';
import UserCardList from '../UserCardList';
import FriendList from '../FriendList';
import styles from './UserDashboard.module.css'

class UserDashboard extends React.Component {
  state = {
    users: [
      { id: 1, name: 'John Doe', gender: 'male', isFriend: false },
      { id: 2, name: 'Jane Smith', gender: 'female', isFriend: false },
      { id: 3, name: 'Alice Johnson', gender: 'female', isFriend: false },
      { id: 4, name: 'Michael Brown', gender: '', isFriend: false },
    ],
  };

  toggleFriendStatus = (userId) => {
    const updatedUsers = this.state.users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          isFriend: !user.isFriend,
        };
      } else {
        return user;
      }
    });

    this.setState({
      users: updatedUsers,
    });
  };

  render() {
    const { users } = this.state;

    const friends = users.filter((user) => user.isFriend);

    return (
      <article className={styles.container}>
        <UserCardList
          users={users}
          toggleFriendStatus={this.toggleFriendStatus}
        />
        <FriendList friends={friends} />
      </article>
    );
  }
}

export default UserDashboard;
