import React from 'react';
import BrewContainer from './BrewContainer.js'
import Brewery from '../components/Brewery.js'


class Favorites extends React.PureComponent{
  state={
    breweries:[],
    windowSize:null,
    selectedBrewery:{}
  }

  handleResize=()=>{
    //google static map require a set size.
    const windowSize = window.innerWidth;
    this.setState({
      windowSize: windowSize
    })
  }
  handleDetails=(brewery)=>{
    let foundBrewery = this.state.breweries.find(brew => brew._id === brewery._id)
    this.setState({
      selectedBrewery:foundBrewery
    }, ()=>{
      console.log(this.state);
    })
  }
  closeDetails=()=>{
    this.setState({
      selectedBrewery:{}
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
        {
          Object.keys(this.state.selectedBrewery).length > 0
          ?
          <Brewery currentPage={this.props.currentPage} windowSize={this.state.windowSize} closeDetails={this.closeDetails} selectedBrewery={this.state.selectedBrewery}/>
          :
          null
        }
      </div>
    )
  }
}
export default Favorites
