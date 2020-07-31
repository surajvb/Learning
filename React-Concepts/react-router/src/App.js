import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({ match }) => {
  return <h1> Hello welcome {match.params.username}</h1>;
};

function App() {
  return (
    <Router>
      <div className='App'>
        <h1> React router demonstration</h1>
        <ul>
          <li>
            <NavLink to='/' exact activeStyle={{color:'green'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about/' exact activeStyle={{color:'green'}}>About</NavLink>
          </li>
          <li>
            <NavLink to='/user/suraj' exact activeStyle={{color:'green'}}>Suraj Logged In</NavLink>
          </li>
          <li>
            <NavLink to='/user/guest' exact activeStyle={{color:'green'}}>Guest Logged In</NavLink>
          </li>
        </ul>

        <Route
          path='/'
          exact
          strict
          render={() => {
            return <h1> Home </h1>;
          }}
        />
        <Route
          path='/about/'
          exact
          strict
          render={() => {
            return <h1> About </h1>;
          }}
        />
        <Route path='/user/:username' exact strict component={User} />
      </div>
    </Router>
  );
}

export default App;
