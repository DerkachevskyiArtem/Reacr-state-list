import React from 'react';
import s from './UserCard.module.css';

class UserCard extends React.Component {
  render() {
    const { id, name, gender, isFriend, toggleFriendStatus } = this.props;

    const cardClass = gender
      ? gender === 'male'
        ? s.male
        : s.female
      : s.userCard;

    const btnClass = isFriend ? s.removeFriend : s.addFriend;

    return (
      <article className={`${s.userCard} ${cardClass}`}>
        <h2 className={s.userCardHeading}>{name}</h2>
        <p className={s.userCardId}>Id: {id}</p>
        <p className={s.userCardGender}>Gender: {gender || 'Not Specified'}</p>
        <button
          className={`${s.btn} ${btnClass}`}
          onClick={() => toggleFriendStatus(id)}
        >
          {isFriend ? 'Remove Friend' : 'Add Friend'}
        </button>
      </article>
    );
  }
}

export default UserCard;
