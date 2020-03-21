import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Flex from './components/Flex';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Friends from './pages/Friends';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="ui segment">
          <Flex>
            <Switch>
              <Route path="/friends">
                <Friends />
              </Route>
              <Route path="/messages">
                <Messages />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Flex>
        </div>
      </div>
    </Router>
  );
}

export default App;
