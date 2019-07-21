import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.PureComponent {
  render(){
    return(
      <div id="Home">
        <div className="video-background">
          <div className="video-foreground">
            <iframe title="brew-vid" src="https://www.youtube.com/embed/ekgzCPauXQM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=ekgzCPauXQM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
          </div>
        </div>
        <div id="home-text">
          <h1 id="logo-text">
            Brew Brew
          </h1>
          <p id="logo-about">
            Cars go <em>'zoom-zoom'</em>, ducks go <em>'quack-quack'</em>, and we go <em>'brew-brew'</em>.
          </p>
        </div>

        <div id="entry">
            <Link className="entry-btn" onClick={this.props.handlePage} to="/search">Search</Link>
            <Link className="entry-btn" onClick={this.props.handlePage} to="/">Learn More</Link>
        </div>
      </div>
    )
  }
}
export default Home
