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
            <div>
            <Link to="/comp/basket"><i class="fas fa-shopping-cart"></i> <h1>{cart.length}</h1></Link>
           
            </div>
            </>
        )
    }
}

export default Header