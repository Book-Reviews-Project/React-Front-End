import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NavItem from '../../components/navItem';
import Dropdown from '../../components/dropdown';
import { getNaveItemSelector } from './selector';

export class Navigation extends Component {
  constructor(props){
    super(props);
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
      </div>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  items: getNaveItemSelector
});

export default connect(
  mapStateToProps
)(Navigation);