import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './containers/Home.js'
import About from './containers/About.js'
import Favorites from './containers/Favorites.js'
import Nav from './components/Nav.js'
import Search from './components/Search.js'
import './style/Nav.css'
import './style/Brewery.css'
import './style/Home.css'
import './style/Search.css'

import './App.css';

class App extends React.PureComponent {
  render(){
    return (
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' render={() =>{
              return <Home />
            }} />
            <Route exact path='/search' render={() =>{
              return <Search />
            }} />
            <Route exact path='/about' render={() =>{
              return <About />
            }} />
            <Route exact path='/favorites' render={() =>{
              return <Favorites />
            }} />
          </Switch>

        </div>
    );
  }
}

export default withRouter(App);
