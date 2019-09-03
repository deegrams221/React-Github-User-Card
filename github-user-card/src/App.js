import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCards';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {},
      followers: []
    };
    console.log("Constructor is running");
  }

  // fetching my user data
  componentDidMount() {
    axios
      .get("https://api.github.com/users/deegrams221")
      .then(res => { 
        this.setState({userData: res.data})
        console.log("userData", this.state.userData);
      })
      .catch(err => console.log(err));
  

  // fetching followers
    axios
      .get("https://api.github.com/users/deegrams221/followers")
      .then(res => {
        this.setState({followers: res.data})
        console.log("follower data: ", this.state.followers);
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User Card</h1>
        </header>
        <div>
          <UserCard data={this.state.userData} followers={this.state.followers} />
        </div>

      </div>
    );
  }
}

export default App;
