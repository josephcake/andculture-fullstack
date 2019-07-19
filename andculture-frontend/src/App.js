import React from 'react';
import Search from './components/search.js'
import './App.css';

class App extends React.Component {
  state={
    value:"",
  }
  handleValue=(e)=>{
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    console.log(event.target.city.value)
  }
  render(){
    return (
      <div className="App">
        <Search value={this.state.value} handleValue={this.handleValue} handleSubmit={(event)=>this.handleSubmit(event)}/>
      </div>
    );
  }
}

export default App;
