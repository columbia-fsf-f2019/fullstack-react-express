import React from 'react';

const FriendCard = ({ name, img, occupation, location }) => (
  <div className="ui card" style={{ width: '250px', margin: '15px' }}>
    <div className="image">
      <img src={img} />
    </div>
    <div className="content">
      <a className="header">{name}</a>
      <div className="meta">
        <span className="date">{occupation}</span>
      </div>
      <div className="description">
        Kristy is an art director living in New York.
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="map icon" /> {location}
      </a>
    </div>
  </div>
);

export default FriendCard;
