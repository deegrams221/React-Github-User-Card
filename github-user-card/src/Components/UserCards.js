import React from 'react';
import '../App.css';

export default function UserCard(props) {
  return(
    <div className="User-Card">
      <img src={props.data.avatar_url} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <a href={props.data.html}>{props.data.login}</a>
      <h3>Location: {props.data.location}</h3>
    </div>
  )
}