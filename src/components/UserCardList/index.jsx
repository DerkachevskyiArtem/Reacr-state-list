import React from 'react';

class UserCardList extends React.Component {
  state = {
    users: [
      { id: 1, name: 'John Doe', gender: 'male' },
      { id: 2, name: 'Jane Smith', gender: 'female' },
      { id: 3, name: 'Alice Johnson', gender: 'female' },
      { id: 4, name: 'Michael Brown', gender: 'male' },
    ],
  };

  render() {
    const {users} = this.props;

    return
  }
}

export default UserCardList;
