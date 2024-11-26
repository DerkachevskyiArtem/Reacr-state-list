import style from './FriendList.module.css';

function FriendList(props) {
  const { users } = props;

  const friendList = users.map((user) => {
    return (
      <li key={user.id} className={style.friendItem}>
        <p className={style.friendName}>{user.name}</p>
      </li>
    );
  });

  return (
    <article className={style.friendList}>
      <h2 className={style.friendListHeading}>Friends List</h2>
      <ul className={style.friendListContainer}>{friendList}</ul>
    </article>
  );
}

export default FriendList;
