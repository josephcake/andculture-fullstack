import React from 'react'
import Breweries from '../containers/Breweries.js'

function BrewContainer({breweries, city, handleDetails}){
  let mappedBreweries = breweries.map(brew => <Breweries key={brew.id ? brew.id : brew._id} handleDetails={()=>handleDetails(brew)} brewery={brew}/>)
  return (
    <div id="brewContainer">
      {
        city
        ?
        <h1 id="brew-in">Breweries in {city}</h1>
        :
        null
      }
      <table id="mainTable" >
        <tbody>
          <tr className="tRow">
            <th className="tHeader">name</th>
            <th className="tHeader">type</th>
            <th className="tHeader">address</th>
            <th className="tHeader">phone</th>
          </tr>
          {mappedBreweries}
        </tbody>
      </table>
    </div>
  )
}
export default BrewContainer
