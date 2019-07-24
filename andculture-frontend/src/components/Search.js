import React from 'react'
import Brewery from './Brewery.js'
import BrewContainer from '../containers/BrewContainer.js'
import {action} from '../methods/index.js'
import swal from 'sweetalert';

class Search extends React.PureComponent{
  state={
    city:'',
    value:'',
    breweries:[],
    selectedBrewery:{},
    windowSize:null
  }
  componentDidMount(){
    window.addEventListener("resize", ()=>action.handleResize(this, window.innerWidth));
    this.setState({
      windowSize: window.innerWidth
    })
  }
  handleSubmit=(event)=>{
    let city;
    if(typeof(event) !== 'string'){
      event.preventDefault()
      city = event.target.city.value.toLowerCase()
    }else{
      city = event
    }
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    .then(req => req.json())
    .then(brew => {
      this.setState({
        city: city,
        value:"",
        breweries : brew,
        selectedBrewery:{}
      })
    })
  }
  handleValue=(e)=>{
    this.setState({
      value: e.target.value
    })
  }
  handleMySubmit=(lat, long)=>{
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_GEO_MAP_API_KEY}`)
    .then(resp=>resp.json())
    .then(city => {
      // "zazazaz" used for edge cases such as New York, where there is a space within city names.
      let cityName = city.plus_code.compound_code.split(",")[0].replace(" ", "zazazaza").split("zazazaza")[1]
      this.handleSubmit(cityName)
    })
  }

  brewNearMe=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.handleMySubmit(position.coords.latitude, position.coords.longitude);
      });
    } else {
      swal(`Geolocation is not support/on for this browser.`, {
        className: "alert-failed",
        icon: "error",
        button: false,
        timer: 2000
      })
    }
  }

  render(){
    return(
      <div id="search">
        <form style=
        {{
            margin:
            this.state.city === ''
            ?
            '15% auto 0'
            :
            '0'
          }}
        onSubmit={this.handleSubmit}>
          <input id="search-input" autoComplete="off" type="text" value={this.state.value} name="city" onChange={this.handleValue} placeholder="Search a city to brew-brew . . . "/>
        </form>
        <button className={this.state.breweries.length === 0 ? "myPos" : "hideMe"}onClick={this.brewNearMe}>Use my location</button>
        {
          this.state.city !== ''
          ?
          <BrewContainer city={this.state.city} breweries={this.state.breweries} handleDetails={(brewery)=>action.handleDetails(brewery, this)}/>
          :
          null
        }
        {
          Object.keys(this.state.selectedBrewery).length > 0
          ?
          <Brewery windowSize={this.state.windowSize} closeDetails={()=>action.closeDetails(this)} selectedBrewery={this.state.selectedBrewery}/>
          :
          null
        }
      </div>
    )
  }
}

export default Search;
