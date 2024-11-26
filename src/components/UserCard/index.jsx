import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
  render() {
    const { id, name, gender, isFriend, toggleFriendStatus } = this.props;

    const cardClass = gender
      ? gender === 'male'
        ? 'user-card male'
        : 'user-card female'
      : 'user-card';

    const btnClass = isFriend ? 'btn remove-friend' : 'btn add-friend';

    return (
      <article className={cardClass}>
        <h2 className="user-card-heading">{name}</h2>
        <p className="user-card-id">Id: {id}</p>
        <p className="user-card-gender">Gender: {gender || 'Not Specified'}</p>
        <button className={btnClass} onClick={() => toggleFriendStatus(id)}>
          {isFriend ? 'Remove Friend' : 'Add Friend'}
        </button>
      </article>
    );
  }
}

export default UserCard;
