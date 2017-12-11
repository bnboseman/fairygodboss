import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import MessageBoard from './components/MessageBoard';
import Post from './components/Post';
import Excerpt from './components/Excerpt';
import Create from './components/Create';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => (
        <MessageBoard></MessageBoard>
        )} />

      <Route path="/view" name="view" component={Post} />

      <Route path="/create" exact render={() => (
          <Create></Create>
      )} />

      </div>
    );
  }
}

export default App;
