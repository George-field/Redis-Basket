/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Product } from '../product';


export default class Cart extends Component {
  constructor(props){
    super()
    this.state = { 
    }

  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        {this.props.cart.map((item, i) => <Product key={i} {...item}  onBtnClick={this.props.removeItemHandler} btnText="Remove Item" /> )}
      </div>
    );
  }
}
