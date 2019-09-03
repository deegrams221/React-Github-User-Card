import React from 'react';
import '../App.css';

export default function UserCard(props) {
  return(
    <div className="User-Card">
      <img src={props.data.avatar_url} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <a href={props.data.html}>Github:@{props.data.login}</a>
      <h3>Location: {props.data.location}</h3>
      <h4>Followers: {props.data.followers}</h4>
        <ul>
          {props.followers.map(follower => {
            return(
              <li key={follower.login}><img src={follower.avatar_url}/><a href={follower.html_url}>{follower.login}</a></li>
            )
          })}
        </ul>
    </div>
  )
}