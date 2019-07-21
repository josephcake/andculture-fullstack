import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.PureComponent {
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
    return(
      <div id="Nav">
        <div id="navSites" className="navDiv">
          <div className="navChoices">
            <Link onClick={this.handlePage} to="/">BrewBrew</Link>
          </div>
          <div className={this.state.currentPage === "home" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.handlePage} to="/">Home</Link>
          </div>
          <div className={this.state.currentPage === "search" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.handlePage} to="/search">Search</Link>
          </div>
          <div className={this.state.currentPage === "favorites" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.handlePage} to="/favorites">Favorites</Link>
          </div>
          <div className={this.state.currentPage === "about" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.handlePage} to="/about">About</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
