import React from 'react';
import './UserCard.css';

function UserCard({ id, name, gender }) {
  const cardClass = gender
    ? gender === 'male'
      ? 'user-card male'
      : 'user-card female'
    : 'user-card';

  return (
    <>
      <article className={cardClass}>
        <h2 className="user-card-heading">Name: {name}</h2>
        <p className="user-card-id">Id: {id}</p>
        <p className="user-card-gender"> Gender: {gender}</p>
      </article>
    </>
  );
}

export default UserCard;
