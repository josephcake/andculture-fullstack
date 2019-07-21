import React from 'react'
import { StaticGoogleMap, Marker} from 'react-static-google-map';
class Brewery extends React.PureComponent{
  // fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${selectedBrewery.latitude},${selectedBrewery.latitude}&zoom=8&size=400x400&key=AIzaSyCsx14Wtql-iLUmD3hX7gN85xoFcNmPfH8`)
  // const center = {lat: Number(selectedBrewery.latitude).toFixed(6), lng: Number(selectedBrewery.longitude).toFixed(6)};
  // const map = new google.maps.Map(
    // document.getElementById('map'), {zoom: 4, center: center});
  // const marker = new google.maps.Marker({position: center, map: map});
  // <img src={"https://maps.googleapis.com/maps/api/staticmap?size=600x600&scale=1&format=png&maptype=roadmap&markers=size:normal%7Ccolor:red%7Clabel:T%7C40.737102,-73.990318%7C40.749825,-73.987963&key=AIzaSyCsx14Wtql-iLUmD3hX7gN85xoFcNmPfH8"}/>
    // const str = selectedBrewery.phone;
    // let phone;
    // if(str.length > 0){
    //   phone = '(' + str.substr(0,3) + ')' + str.substr(3,3) + '-' + str.substr(6);
    // }
    addToFav=()=>{
      fetch(`http://localhost:9001/api/breweries`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.props.selectedBrewery)
      })
      console.log("Added to the database");
    }

    checkDataBase=()=>{
      fetch(`http://localhost:9001/api/breweries/${this.props.selectedBrewery.id}`)
      .then(resp=>resp.json())
      .then(brew =>{
        if(brew !== null && brew._id === this.props.selectedBrewery.id){
          console.log(brew);
          console.log("Already here.");
          return true
        }else{
          console.log("Not in here!");
          this.addToFav()
        }
      })
    }


  render(){

    return(
      <div id="brewery">
        <button id="close" onClick={this.props.closeDetails}>CLOSE</button>
        <div id="brewery-container">
          <div id="brewery-img" className="brewery-section">
            <div id="profile" className="brewery-inner">
              <h2 onClick={this.checkDataBase} className="profile-text">{this.props.selectedBrewery.name}</h2>
              <h4 className="profile-text">{'phone'}</h4>
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
                className="img-fluid" apiKey="AIzaSyCsx14Wtql-iLUmD3hX7gN85xoFcNmPfH8"
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
