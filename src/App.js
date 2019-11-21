import React from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import Wishlist from "./Components/Wishlist";

function ProtectedRoute({ Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location.pathname }
            }}
          />
        );
      }}
    />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = (username, password) => {
    if (username === "demo" && password === "demo") {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <ProtectedRoute path="/home" component={Home} />
            <Route
              path="/signin"
              render={props => {
                return (
                  <Signin
                    {...props}
                    handleLogin={this.handleLogin}
                    isLoggedIn={isLoggedIn}
                  />
                );
              }}
            />
            <ProtectedRoute
              path="/wishlist"
              Component={Wishlist}
              isLoggedIn={isLoggedIn}
            />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
