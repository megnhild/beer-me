import React, { Component } from 'react';
import Header from './Components/Header';
import Breweries from './Components/Breweries';
import './App.css';
import BreweriesByState from './Components/BreweriesByState';

class App extends Component {

  constructor () {
    super()
    this.state = {
      breweries: [],
      selectorValue: ""
    }
    this.handleSelectorChange = this.handleSelectorChange.bind(this)
  }

  handleSelectorChange = e => {
    this.setState({ selectorValue: e.target.value })
  }

  handleSearch = () => {
    this.makeApiCall(this.selectorValue)
  }

  makeApiCall = selectorInput => {

    let selectorUrl = 'https://api.openbrewerydb.org/breweries?by_state=${selectorInput}'

    fetch(selectorUrl)
      .then(res => res.json())
      .then((data) => {
        this.setState({ breweries: data })
      })
      .catch(console.log)
  }
  
  async componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(res => res.json())
      .then((data) => {
        this.setState({ breweries: data })
      })
      .catch(console.log)
  }

  render () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="card-columns">
          <Breweries breweries={this.state.breweries} />
        </div>
        <div className="card-columns">
          <BreweriesByState />
        </div>
      </div>
    );
  }
}

export default App;
