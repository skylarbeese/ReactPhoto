import React, {Component} from 'react'
//import Cart from './cart'
import { DataContext } from './store/context'
import { Link } from 'react-router-dom'
class Header extends Component {
    static contextType = DataContext
    render() {
        const {cart} = this.context
        return (
            <>
            <div>
            <Link to=""><i class="fas fa-shopping-cart"></i></Link>
            <h1>{cart.length}</h1>
            </div>
            </>
        )
    }
}

export default Header