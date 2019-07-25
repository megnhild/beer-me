import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Header extends Component {
  render () {
    return (

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Beer Me</h1>
          <p className="lead">This is a simple search app to help you find breweries all over the USA.</p>
          <SearchForm handleSearch={this.props.handleSearch} handleSelectorChange={this.props.handleSelectorChange} />
        </div>
      </div>

    )
  }
}

export default Header;