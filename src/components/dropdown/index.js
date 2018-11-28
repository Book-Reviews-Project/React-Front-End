import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../navItem';

export default function Dropdown({destination, text, items}) {
  const keys = Object.keys(items);
  return(
    <div>
      <a href={destination}>{text}</a>
      {keys.map((key, index) => {
        return <NavItem text={items[key].text} destination={items[key].destination} key={index} />;
      })}
    </div>
  );
}

Dropdown.propTypes = {
  destination: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired
};