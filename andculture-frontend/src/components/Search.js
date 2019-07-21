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
  handleDetails=(breweryID)=>{
    let foundBrewery = this.state.breweries.find(brew => brew.id === breweryID)
    this.setState({
      selectedBrewery:foundBrewery
    }, ()=>{
      console.log(this.state);
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    const city = event.target.city.value.toLowerCase()
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
  render(){
    return(
      <div id="search">
        <form style=
        {{
            margin:
            this.state.city === ''
            ?
            '20% auto'
            :
            '0'
          }}
        onSubmit={this.handleSubmit}>
          <input id="search-input" autoComplete="off" type="text" value={this.state.value} name="city" onChange={this.handleValue} placeholder="Search a city to brew-brew . . . "/>
        </form>
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
