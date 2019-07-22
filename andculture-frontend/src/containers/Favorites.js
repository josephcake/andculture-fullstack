import React from 'react';
import BrewContainer from './BrewContainer.js'
import Brewery from '../components/Brewery.js'
import {action} from '../methods/index.js'

class Favorites extends React.PureComponent{
  state={
    breweries:[],
    windowSize:null,
    selectedBrewery:{}
  }

  componentDidMount(){
    window.addEventListener("resize", ()=>action.handleResize(this, window.innerWidth));
    fetch(`http://localhost:9001/api/breweries`)
    .then(req => req.json())
    .then(breweries => {
      this.setState({
        breweries : breweries,
        windowSize: window.innerWidth
      })
    })
  }

  render(){
    return(
      <div id="favorites">
        <BrewContainer breweries={this.state.breweries} handleDetails={(brewery)=>action.handleDetails(brewery, this)}/>
        {
          Object.keys(this.state.selectedBrewery).length > 0
          ?
          <Brewery currentPage={this.props.currentPage} windowSize={this.state.windowSize} closeDetails={()=>action.closeDetails(this)} selectedBrewery={this.state.selectedBrewery}/>
          :
          null
        }
      </div>
    )
  }
}
export default Favorites
