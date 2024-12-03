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
        ? 'userCard male'
        : 'userCard female'
      : 'userCard';

    const btnClass = isFriend ? 'btn removeFriend' : 'btn addFriend';

    return (
      <article className={cardClass}>
        <h2 className="userCardHeading">{name}</h2>
        <p className="userCardId">Id: {id}</p>
        <p className="userCardGender">Gender: {gender || 'Not Specified'}</p>
        <button className={btnClass} onClick={this.toggleFriendStatus}>
          {isFriend ? 'Remove Friend' : 'Add Friend'}
        </button>
      </article>
    );
  }
}

export default UserCard;



