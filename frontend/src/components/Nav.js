import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = ({ location }) => {
  console.log(location);
  return (
    <div className="ui pointing menu">
      <Link
        className={`item ${location.pathname === '/' ? 'active' : ''}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`item ${location.pathname === '/friends' ? 'active' : ''}`}
        to="/friends"
      >
        Friends
      </Link>
      <Link
        className={`item ${location.pathname === '/messages' ? 'active' : ''}`}
        to="/messages"
      >
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
};

export default withRouter(Nav);
