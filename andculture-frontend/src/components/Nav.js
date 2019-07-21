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
          <div className={this.props.currentPage === "Home" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/">Home</Link>
          </div>
          <div className={this.props.currentPage === "Search" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/search">Search</Link>
          </div>
          <div className={this.props.currentPage === "About" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/about">About</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
