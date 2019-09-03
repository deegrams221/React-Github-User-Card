import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCards';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {}
    };
    console.log("Constructor is running");
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/deegrams221")
      .then(res => { 
        this.setState({userData: res.data})
        console.log("userData", this.state.userData);
      })
      .catch(err => console.log(err));
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User Cards</h1>
        </header>
        <div>
          <UserCard data={this.state.userData} />
        </div>

      </div>
    );
  }
}

export default App;
