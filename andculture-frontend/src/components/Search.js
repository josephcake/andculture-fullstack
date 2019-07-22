import React from 'react'
import Brewery from './Brewery.js'
import BrewContainer from '../containers/BrewContainer.js'


class Search extends React.PureComponent{
  state={
    city:'',
    value:'',
    breweries:[],
    selectedBrewery:{},
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
    console.log("Search");
    window.addEventListener("resize", this.handleResize);
    this.setState({
      windowSize: window.innerWidth
    })
  }
  closeDetails=()=>{
    this.setState({
      selectedBrewery:{}
    })
  }
  handleDetails=(brewery)=>{
    let foundBrewery = this.state.breweries.find(brew => brew.id === brewery.id)
    this.setState({
      selectedBrewery:foundBrewery
    }, ()=>{
      console.log(this.state);
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
    console.log(this.state)
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
    // let lat;
    // let long;
    // lat = position.coords.latitude.toFixed(6);
    // long = position.coords.longitude.toFixed(6);
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyCsx14Wtql-iLUmD3hX7gN85xoFcNmPfH8`)
    .then(resp=>resp.json())
    .then(city => {
      console.log(city);
      console.log(city.plus_code.compound_code);
      console.log(city.plus_code.compound_code.split(",")[0].replace(" ", "zazazaza").split("zazazaza")[1]);
      let cityName = city.plus_code.compound_code.split(",")[0].replace(" ", "zazazaza").split("zazazaza")[1]
      this.handleSubmit(cityName)
    })
  }

  brewNearMe=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        this.handleMySubmit(position.coords.latitude, position.coords.longitude);
      });
    } else {
        alert("Geolocation is not on/supported by this browser.");
    }
    // console.log(lat, long);
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
          <BrewContainer city={this.state.city} breweries={this.state.breweries} handleDetails={this.handleDetails}/>
          :
          null
        }
        {
          Object.keys(this.state.selectedBrewery).length > 0
          ?
          <Brewery windowSize={this.state.windowSize} closeDetails={this.closeDetails} selectedBrewery={this.state.selectedBrewery}/>
          :
          null
        }
      </div>
    )
  }
}

export default Search;
