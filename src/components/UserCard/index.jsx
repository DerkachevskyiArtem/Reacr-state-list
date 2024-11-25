import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFriend: false,
    };
  }

  toggleFriendStatus = () => {
    this.setState({
      isFriend: !this.state.isFriend,
    });
  };

  render() {
    const { id, name, gender } = this.props;
    const { isFriend } = this.state;

    const cardClass = gender
      ? gender === 'male'
        ? 'user-card male'
        : 'user-card female'
      : 'user-card';

    return (
      <article className={cardClass}>
        <h2 className="user-card-heading">{name}</h2>
        <p className="user-card-id">Id: {id}</p>
        <p className="user-card-gender">Gender: {gender || 'Not Specified'}</p>
        <button className="btn" onClick={this.toggleFriendStatus}>
          {isFriend ? 'Remove Friend' : 'Add Friend'}
        </button>
      </article>
    );
  }
}

export default UserCard;
