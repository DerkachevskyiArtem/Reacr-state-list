import style from './FriendList.module.css';

function FriendList(props) {
  const { friends } = props;

  const friendList = friends.map((friend) => {
    return (
      <li key={friend.id} className={style.friendItem}>
        <p className={style.friendName}>{friend.name}</p>
      </li>
    );
  });

  return (
    <article className={style.friendList}>
      <h2 className={style.friendListHeading}>Friends List</h2>
      <ul className={style.friendListContainer}>
        {friends.length > 0 ? 
          friendList
         : 
          <li className={style.emptyMessage}>Is empty</li>
        }
      </ul>
    </article>
  );
}

export default FriendList;
