import React from 'react'
import { Link } from 'react-router-dom'

//class component instead of a functional component
//for re-rendering of window.location.href
class Nav extends React.Component{
  render(){
    return(
      <div id="Nav">
        <div id="navSites" className="navDiv">
          <div className="navChoices">
            <Link to="/">BrewBrew</Link>
          </div>
          <div className={window.location.href.includes("home")? `navChoices highlightNav` : "navChoices"}>
            <Link to="/">Home</Link>
          </div>
          <div className={window.location.href.includes("search") ? `navChoices highlightNav` : "navChoices"}>
            <Link to="/search">Search</Link>
          </div>
          <div className={window.location.href.includes("favorites") ? `navChoices highlightNav` : "navChoices"}>
            <Link to="/favorites">Favorites</Link>
          </div>
          <div className={window.location.href.includes("about") ? `navChoices highlightNav` : "navChoices"}>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
