import React from 'react'

const Search = ({value, handleValue, handleSubmit}) => {
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} name="city" onChange={handleValue} placeholder="Search . . . eg: New York"/>
    </form>
  )
}
export default Search
