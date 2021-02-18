import React, {Component} from 'react'

import {DataContext} from './store/context'
class Basket extends Component {
    static contextType = DataContext
    render() {
        const {cart} = this.context
        return(
         <>
           <h1>basket</h1>
         </>
        )
    }
}
export default Basket