import React, {Component} from 'react'
//import Cart from './cart'
import { DataContext } from './context'
import { Link } from 'react-router-dom'
class Header extends Component {
    static contextType = DataContext
    render() {
        const {cart} = this.context
        return (
            <>
            <div className="header-cart-con">
            <Link to="/comp/basket">  <div className="cart-btn-con">
    <div className="cart-btn">
         
            <p>Cart Items(<div>{cart.length}</div>) </p>
            <h1 ><i class="fas fa-shopping-cart"></i></h1>
          </div>
          </div></Link>
           
            </div>
            </>
        )
    }
}

export default Header