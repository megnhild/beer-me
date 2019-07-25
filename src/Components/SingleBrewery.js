import React from 'react';

const SingleBrewery = ({ breweries = [] }) => {
  return (
    <div>
      {breweries.map((brewery, index) => (
        <div className="modal" tabindex="-1" role="dialog" key={index}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{brewery.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h6>{brewery.street}</h6>
              <h6>{brewery.city}, {brewery.state} {brewery.postal_code}</h6>
              <h5>{brewery.phone}</h5>
              <p>{brewery.type}</p>
              <p>{brewery.tag_list}</p>
              <a href={brewery.website_url}>Visit Website</a>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default SingleBrewery;