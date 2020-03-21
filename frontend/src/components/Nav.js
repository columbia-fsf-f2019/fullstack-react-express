import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="ui pointing menu">
    <Link className="active item" to="/">
      Home
    </Link>
    <Link className="item" to="/friends">
      Friends
    </Link>
    <Link className="item" to="/messages">
      Messages
    </Link>
    <div className="right menu">
      <div className="item">
        <div className="ui transparent icon input">
          <input type="text" placeholder="Search..." />
          <i className="search link icon" />
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
