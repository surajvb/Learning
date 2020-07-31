import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({match}) => {
return <h1> Hello welcome { match.params.username}</h1>
}

function App() {
  return (
    <Router>
      <div className='App'>
        <h1> React router demonstration</h1>
        <Route path="/" exact strict render={ () => {
          return <h1> Home </h1>
        }} />
        <Route path="/about/" exact strict render={ () => {
          return <h1> About </h1>
        }} />
        <Route path="/user/:username" exact strict component={User} />
      </div>
    </Router>
  );
}

export default App;
