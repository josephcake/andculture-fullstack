export const action ={
  handleResize: function(component, width){
    component.setState({
      windowSize: width
    })
  },
  handleDetails: function(brewery, component){
    let foundBrewery
    if(brewery._id){
      foundBrewery = component.state.breweries.find(brew => brew._id === brewery._id)
    }else{
      foundBrewery = component.state.breweries.find(brew => brew.id === brewery.id)
    }
    component.setState({
      selectedBrewery:foundBrewery
    }, ()=>{
      console.log(brewery);
    })
  },
  closeDetails: function(component){
    component.setState({
      selectedBrewery:{}
    })
  }
}
