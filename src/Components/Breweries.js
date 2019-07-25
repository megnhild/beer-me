import React from 'react';

  const Breweries = ({ breweries }) => {
    return (
      <div>
        {breweries.map((brewery, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{brewery.city}, {brewery.state}</h6>
              <p className="card-text">{brewery.tag_list}</p>
              <a href="#" className="card-link">Visit Website</a>
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default Breweries;