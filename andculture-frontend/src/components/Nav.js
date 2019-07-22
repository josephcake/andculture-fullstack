import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.PureComponent {


  render(){
    return(
      <div id="Nav">
        <div id="navSites" className="navDiv">
          <div className="navChoices">
            <Link onClick={this.props.handlePage} to="/">BrewBrew</Link>
          </div>
          <div className={this.props.currentPage === "home" || this.props.currentPage ==="brewbrew" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/">Home</Link>
          </div>
          <div className={this.props.currentPage === "search" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/search">Search</Link>
          </div>
          <div className={this.props.currentPage === "favorites" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/favorites">Favorites</Link>
          </div>
          <div className={this.props.currentPage === "about" || this.props.currentPage === "learn more"? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/about">About</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
