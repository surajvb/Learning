import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1> React router demonstration</h1>
        <Route path="/" exact render={ () => {
          return <h1> Home </h1>
        }} />
        <Route path="/about" exact render={ () => {
          return <h1> About </h1>
        }} />
      </div>
    </Router>
  );
}

export default App;
