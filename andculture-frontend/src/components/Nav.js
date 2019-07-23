import React, {memo} from 'react'
import { Link } from 'react-router-dom'

function Nav({ handlePage, currentPage }){
  return(
    <div id="Nav">
      <div id="navSites" className="navDiv">
        <div className="navChoices">
          <Link onClick={handlePage} to="/">BrewBrew</Link>
        </div>
        <div className={currentPage === "home" || currentPage ==="brewbrew" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={handlePage} to="/">Home</Link>
        </div>
        <div className={currentPage === "search" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={handlePage} to="/search">Search</Link>
        </div>
        <div className={currentPage === "favorites" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={handlePage} to="/favorites">Favorites</Link>
        </div>
        <div className={currentPage === "about" || currentPage === "learn more" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={handlePage} to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}
export default memo(Nav)
