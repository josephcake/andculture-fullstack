import React from 'react'
import { StaticGoogleMap, Marker} from 'react-static-google-map';
function Brewery ({windowSize, closeDetails, selectedBrewery}){
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
  return(
    <div id="brewery">
      <button id="close" onClick={closeDetails}>CLOSE</button>
      <div id="brewery-container">
        <div id="brewery-img" className="brewery-section">
          <div id="profile" className="brewery-inner">
            <h2 className="profile-text">{selectedBrewery.name}</h2>
            <h4 className="profile-text">{'phone'}</h4>
            <h4 className="profile-text"><a className="breweryName" target="_blank" rel="noopener noreferrer" href={selectedBrewery.website_url}>{selectedBrewery.website_url}</a></h4>
          </div>
        </div>
        <div id="address-map" className="brewery-section">
          <div id="address" className="info">
            <div className="brewery-inner">
              <h2 className="address-text">{selectedBrewery.id}</h2>
              <h2 className="address-text">{selectedBrewery.street}</h2>
              <h2 className="address-text">{selectedBrewery.city}</h2>
              <h2 className="address-text">{selectedBrewery.state}</h2>
              <h2 className="address-text">{selectedBrewery.postal_code}</h2>
            </div>
          </div>
          <div id="map" className="info">
            <StaticGoogleMap
              size={
                windowSize < 500
                ?
                `350x350`
                :
                windowSize < 700
                ?
                `400x400`
                :
                windowSize < 900
                ?
                `550x500`
                :
                `700x500`
              }
              className="img-fluid" apiKey="AIzaSyCsx14Wtql-iLUmD3hX7gN85xoFcNmPfH8"
              >
              {
                selectedBrewery.latitude !== null
                ?
                <Marker location={{lat:Number(selectedBrewery.latitude).toFixed(6), lng:Number(selectedBrewery.longitude).toFixed(6)}} color="red" size="small" label="P" />
                :
                <Marker location={`${selectedBrewery.street}+${selectedBrewery.city}+${selectedBrewery.state}`} />
              }
            </StaticGoogleMap>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Brewery
