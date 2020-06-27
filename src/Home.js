import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.props.auth.login}>Login</button>
      </div>
    );
  }
}

export default Home;
