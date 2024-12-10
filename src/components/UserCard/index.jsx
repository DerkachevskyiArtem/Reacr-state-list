import React from 'react';
import s from './UserCard.module.css';

class UserCard extends React.Component {
  render() {
    const {
      user: { id, name, gender, isFriend },
      toggleFriendStatus,
    } = this.props;

    const genderClass = gender ? s[gender] : '';

    const btnClass = `${s.btn} ${isFriend ? s.removeFriend : s.addFriend}`;

    return (
      <article className={`${s.userCard} ${genderClass}`}>
        <h2 className={s.userCardHeading}>{name}</h2>
        <p className={s.userCardId}>Id: {id}</p>
        <p className={s.userCardGender}>Gender: {gender || 'Not Specified'}</p>
        <button className={btnClass} onClick={() => toggleFriendStatus(id)}>
          {isFriend ? 'Remove Friend' : 'Add Friend'}
        </button>
      </article>
    );
  }
}

export default UserCard;
