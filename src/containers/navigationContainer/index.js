import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NavItem from '../../components/navItem';
import Dropdown from '../../components/dropdown';
import Search from '../../components/search';
import { getNavItemSelector, getTokenSelector } from './selector';
import { searchReview } from './actions';

export class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: ''
    };
    this.search = this.search.bind(this);
    this.input = this.input.bind(this);
  }

  search(event) {
    // save the search query in store and check to see if it has been made 
    // if it has check the store if not make call.
    // PS: make a review container used for search results, categories and home
    event.preventDefault();
    this.props.searchReviews(this.state.searchInput);
  }

  input(event) {
    const searchInput = event.target.value;
    this.setState({searchInput});
  }

  render(){
    const items = this.props.items;
    const keys = Object.keys(items);

    return(
      <div>
        {keys.map((key, index) => {
          return items[key].dropdown ? <Dropdown items={items[key].items} text={items[key].text} destination={items[key].destination} /> :
            <NavItem text={items[key].text} destination={items[key].destination} key={index} /> ;
        })}
        <Search search={this.search} input={this.input} />
      </div>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.object.isRequired,
  searchReviews: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  items: getNavItemSelector,
  token: getTokenSelector
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchReviews: query => dispatch(searchReview(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);