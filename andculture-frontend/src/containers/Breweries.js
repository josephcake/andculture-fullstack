import React from 'react'

function Breweries({brewery, handleDetails}){
  const str = brewery.phone;
  let phone;
  if(str.length > 0){
    phone = '(' + str.substr(0,3) + ')' + str.substr(3,3) + '-' + str.substr(6);
  }
  return(
    <tr onClick={()=>handleDetails(brewery)} city={brewery.name} className="tRow">
      <td className="tData"><a className="brewery-list-name" target="_blank" rel="noopener noreferrer" href={brewery.website_url}>{brewery.name}</a></td>
      <td className="tData">{brewery.brewery_type}</td>
      <td className="tData">{brewery.street} {brewery.city} {brewery.state} {brewery.postal_code}</td>
      <td className="tData">{phone}</td>
    </tr>
  )
}
export default Breweries
