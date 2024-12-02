import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
  render() {
    const { id, name, gender, isFriend, toggleFriendStatus } = this.props;

    const cardClass = gender
      ? gender === 'male'
        ? 'userCard male'
        : 'userCard female'
      : 'userCard';

    const btnClass = isFriend ? 'btn removeFriend' : 'btn addFriend';

    return (
      <article className={cardClass}>
        <h2 className="userCardHeading">{name}</h2>
        <p className="userCardId">Id: {id}</p>
        <p className="userCardGender">Gender: {gender || 'Not Specified'}</p>
        <button className={btnClass} onClick={() => toggleFriendStatus(id)}>
          {isFriend ? 'Remove Friend' : 'Add Friend'}
        </button>
      </article>
    );
  }
}

export default UserCard;
