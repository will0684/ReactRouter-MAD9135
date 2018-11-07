import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id/todos" component={UserTodos}/>
            <Route path="/user/:id/posts" component={UserPosts}/>
            <Route path="/todos" component={UserTodos}/>
            <Route path="/posts" component={UserPosts}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
