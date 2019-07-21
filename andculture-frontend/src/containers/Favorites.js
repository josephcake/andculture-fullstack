import React from 'react';
import BrewContainer from './BrewContainer.js'


class Favorites extends React.PureComponent{
  state={
    breweries:[],
    windowSize:null
  }

  handleResize=()=>{
    //google static map require a set size.
    const windowSize = window.innerWidth;
    this.setState({
      windowSize: windowSize
    })
  }
  componentDidMount(){
    console.log("mounting");
    window.addEventListener("resize", this.handleResize);
    fetch(`http://localhost:9001/api/breweries`)
    .then(req => req.json())
    .then(breweries => {
      this.setState({
        breweries : breweries,
        windowSize: window.innerWidth
      }, ()=>{
        console.log(this.state.breweries);
      })
    })
  }

  render(){
    return(
      <div id="favorites">
        <BrewContainer breweries={this.state.breweries} handleDetails={this.handleDetails}/>
      </div>
    )
  }
}
export default Favorites
