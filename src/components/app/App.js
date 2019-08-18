/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './App.scss';
import { Product } from '../product';
import Box from '@material-ui/core/Box';
import { Nav } from '../navigation'
import Cookies from 'js-cookie';
import Cart from '../cart'
//{"id":"1","name":"Rustic Steel Cheese","image":"http://lorempixel.com/640/480/transport","price":"940.00","Description":"hierarchy"}

export default class App extends Component {
  constructor(props){
    super()
    this.state = { 
      products : [],
      showCart: false,
    }

  }

  componentDidMount(){
    this.props.getProductData().then(() => {this.setState({products: this.props.products})})
    this.props.getCart().then(() => {console.log("Get cart  called")})
    }

  showCartHandler(){
    this.setState({showCart: this.state.showCart ?  false : true})
  }
  


  render() {
    console.log(this.props.cart)
    console.log(this.state)
    return (
      <div>
        <Nav showCartHandler={this.showCartHandler.bind(this)}/>
        { !this.state.showCart &&
          <div>
            <h1>Products</h1>
            <Box display="flex">
              {this.state.products.map((product, i) => <Product key={i} {...product} onBtnClick={(item) => {this.props.addItemToCart(item)}} btnText="Add to cart"/> )}
            </Box> 
          </div>
        }
        { this.state.showCart &&
           <Box display="flex">
           {this.props.cart != null ? <Cart cart={this.props.cart} removeItemHandler={this.props.removeItemFromCart} /> : "" }
           </Box>
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
