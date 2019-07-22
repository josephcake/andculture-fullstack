import React from 'react'
import { StaticGoogleMap, Marker} from 'react-static-google-map';
import swal from 'sweetalert';


class Brewery extends React.PureComponent{

  addToFav=()=>{
    fetch(`http://localhost:9001/api/breweries`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.props.selectedBrewery)
    })
    .then(value=>{
      swal(`You've just favorited this!!`, {
        button: false,
        timer: 2000
      })
    })
  }

  checkDataBase=()=>{
    if(this.props.currentPage === 'search'){
      fetch(`http://localhost:9001/api/breweries/${this.props.selectedBrewery.id}`)
      .then(resp=>resp.json())
      .then(brew =>{
        if(brew !== null && brew._id === this.props.selectedBrewery.id){
          swal(`Already in Favorites!`, {
            icon: "error",
            button: false,
            timer: 2000
          })
          return true
        }else{
          this.addToFav()
        }
      })
    }else{
      swal(`This button doesn't do anything here, haha!`, {
        icon: "error",
        button: false,
        timer: 2000
      })
    }
  }

  render(){
    const str = this.props.selectedBrewery.phone;
    let phone;
    if(str.length > 0){
      phone = '(' + str.substr(0,3) + ')' + str.substr(3,3) + '-' + str.substr(6);
    }
    return(
      <div id="brewery">
        <div className="btn-container">
          <button id="close" className="brew-buttons" onClick={this.props.closeDetails}>CLOSE</button>
          <button id="plus" className="brew-buttons" onClick={this.checkDataBase}>❤︎</button>
        </div>
        <div id="brewery-container">
          <div id="brewery-img" className="brewery-section">
            <div id="profile" className="brewery-inner">
              <h4  className="profile-text">{this.props.selectedBrewery.name}</h4>
              <h4 className="profile-text">{phone}</h4>
              <h4 className="profile-text"><a className="breweryName" target="_blank" rel="noopener noreferrer" href={this.props.selectedBrewery.website_url}>{this.props.selectedBrewery.website_url}</a></h4>
            </div>
          </div>
          <div id="address-map" className="brewery-section">
            <div id="address" className="info">
              <div className="brewery-inner">
                <h2 className="address-text">{this.props.selectedBrewery.id}</h2>
                <h2 className="address-text">{this.props.selectedBrewery.street}</h2>
                <h2 className="address-text">{this.props.selectedBrewery.city}</h2>
                <h2 className="address-text">{this.props.selectedBrewery.state}</h2>
                <h2 className="address-text">{this.props.selectedBrewery.postal_code}</h2>
              </div>
            </div>
            <div id="map" className="info">
              <StaticGoogleMap
                size={
                  this.props.windowSize < 500
                  ?
                  `350x350`
                  :
                  this.props.windowSize < 700
                  ?
                  `400x400`
                  :
                  this.props.windowSize < 900
                  ?
                  `550x500`
                  :
                  `700x500`
                }
                style={
                  {
                    feature:'landscape',
                    element:'all',
                    visibility:'simplified',
                    hue:'0xe4e4e4'
                  }
                }
                className="img-fluid" apiKey={process.env.REACT_APP_GEO_MAP_API_KEY}
                >
                {
                  this.props.selectedBrewery.latitude !== null
                  ?
                  <Marker location={{lat:Number(this.props.selectedBrewery.latitude).toFixed(6), lng:Number(this.props.selectedBrewery.longitude).toFixed(6)}} color="red" size="small" label="P" />
                  :
                  <Marker location={`${this.props.selectedBrewery.street}+${this.props.selectedBrewery.city}+${this.props.selectedBrewery.state}`} />
                }
              </StaticGoogleMap>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Brewery
