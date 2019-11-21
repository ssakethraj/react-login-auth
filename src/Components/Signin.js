import React from "react";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value
      });
    } else if (e.target.name === "password") {
      this.setState({
        password: e.target.value
      });
    }
  };
  render() {
    const { username, password } = this.state;
    if (this.props.isLoggedIn) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div>
          <input
            name="username"
            type="text"
            value={this.state.username}
            id="username"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            id="username"
            onChange={this.handleChange}
          />
          <button onClick={() => this.props.handleLogin(username, password)}>
            Signin
          </button>
        </div>
      );
    }
  }
}

export default Signin;
