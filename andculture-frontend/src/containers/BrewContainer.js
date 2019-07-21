import React from 'react'
import Breweries from '../containers/Breweries.js'

class BrewContainer extends React.PureComponent{
  render(){
    let breweries = this.props.breweries.map(brew => <Breweries key={brew.id} handleDetails={this.props.handleDetails} brewery={brew}/>)
    return (
      <>
        <h1>Breweries in {this.props.city}</h1>
        <table id="mainTable" >
          <tbody>
            <tr className="tRow">
              <th className="tHeader">name</th>
              <th className="tHeader">type</th>
              <th className="tHeader">address</th>
              <th className="tHeader">phone</th>
            </tr>
            {breweries}
          </tbody>
        </table>
      </>
    )
  }
}
export default BrewContainer
