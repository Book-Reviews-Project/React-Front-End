import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavItem(props) {
  return (
    <NavLink to={props.destination}>{props.text}</NavLink>
  );
}

NavItem.propTypes = {
  destination: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};