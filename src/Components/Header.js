import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          {this.props.isLoggedIn ? (
            <button>signout</button>
          ) : (
            <li>
              <Link to="/signin">Signin</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Header;
