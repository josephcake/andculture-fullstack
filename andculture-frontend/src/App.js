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
import './style/About.css'
import './App.css';

class App extends React.PureComponent {
  state={
    currentPage:"home"
  }
  componentDidMount(){
    let href = window.location.href.split('/')
    href = href[href.length-1]
    if(href !== ""){
      this.setState({
        currentPage: href
      })
    }
  }
  handlePage=(e)=>{
    this.setState({
      currentPage: e.target.innerText.toLowerCase()
    })
  }
  render(){
    return (
        <div className="App">
          <Nav handlePage={this.handlePage} currentPage={this.state.currentPage}/>
          <Switch>
            <Route exact path='/' render={() =>{
              return <Home handlePage={this.handlePage}/>
            }} />
            <Route exact path='/search' render={() =>{
              return <Search />
            }} />
            <Route exact path='/favorites' render={() =>{
              return <Favorites currentPage={this.state.currentPage}/>
            }} />
            <Route exact path='/about' render={() =>{
              return <About />
            }} />
          </Switch>

        </div>
    );
  }
}

export default withRouter(App);
