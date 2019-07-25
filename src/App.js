import React, { Component } from 'react';
import Header from './Components/Header';
import Breweries from './Components/Breweries';
import './App.css';
import BreweriesByState from './Components/BreweriesByState';
import SingleBrewery from './Components/SingleBrewery';

class App extends Component {

  constructor () {
    super()
    this.state = {
      breweries: [],
      selectorValue: ""
    }
    this.handleSelectorChange = this.handleSelectorChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleModal = this.handleModal.bind(this)
  }

  handleSelectorChange = e => {
    this.setState({ selectorValue: e.target.value })
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.makeSecondApiCall(this.state.selectorValue)
  }

  handleModal = (event) => {
    event.preventDefault()
    this.makeThirdApiCall(event.target.value)
  }
  
  async componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(res => res.json())
      .then((data) => {
        this.setState({ breweries: data })
      })
      .catch(console.log)
  }

  makeSecondApiCall = selectInput => {

    let selectUrl = `https://api.openbrewerydb.org/breweries?by_state=${selectInput}`

    fetch(selectUrl)
      .then(res => res.json())
      .then((data) => {
        this.setState({ breweries: data })
      })
      .catch(console.log)
  }

  makeThirdApiCall = selectInput => {

    let selectUrl = `https://api.openbrewerydb.org/breweries/${selectInput}`

    fetch(selectUrl)
      .then(res => res.json())
      .then((data) => {
        var breweries;
        if(Array.isArray(data)){
          breweries = data;
        } else {
          breweries = data.reduce;
        }
        this.setState({ breweries: breweries })
      })
      .catch(console.log)
  }

  render () {
    return (
      <div>
        <div>
          <SingleBrewery />
        </div>
        <div>
          <Header handleSearch={this.handleSearch} handleSelectorChange={this.handleSelectorChange} />
        </div>
        <div className="card-columns">
          <Breweries breweries={this.state.breweries} handleModal={this.handleModal} />
        </div>
        <div className="card-columns">
          <BreweriesByState handleModal={this.handleModal} />
        </div>
      </div>
    );
  }
}

export default App;
