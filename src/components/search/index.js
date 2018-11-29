import React from 'react';
import PropTypes from 'prop-types';

export default function Search(props) {
  return (
    <form onSubmit={props.search}>
      <input type="text" placeholder="search for reviews" onChange={props.input}/>
      <button type="submit" value="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired
};