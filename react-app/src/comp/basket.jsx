import React, {Component} from 'react'
import Nav from './nav'
import Footer from './footer'
import {DataContext} from './store/context'
class Basket extends Component {
  static contextType = DataContext
  
    render() {
   
      const {cart, product, onAdd, onRemove} = this.context
      const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0)
      const total = itemsPrice  
        return(
         <>
         <Nav />
    <div className={`cart-con `} >
    
     <div className={"cart-title"} >
     
       <h1>Cart</h1>
       <div className={`underline`}></div>
     </div>
     <div className="cart-con1">
  
    <div>{cart.length === 0 && <div>cart is empty</div>}</div>
     <div className="cart-items">
    {cart.map((item) => {
      return <><div key={item.itemId} className="cart-info-con">
       
       
        
        <div className="item-name">{item.name}</div>
        <div className={`underline`}></div>
        <div className="item-info">
          <div >print size: {item.item}</div>
         
          <div>how meny of this item: {item.qty}</div>
        
          <div>${item.price}</div>
          </div>
        </div>
     
        <div className="add-minus-btn">
          <button onClick={() => onAdd(item)}><i class="fas fa-plus"></i></button>
          <button onClick={() => onRemove(item)}><i class="fas fa-minus"></i></button>
        </div>
       </>
        

    })}
   </div>
   {cart.length !== 0 && (
      <>
      <div className="check-prices">
          <div className="total-text">total price</div>
      <div className="">
      <div className={`underline`}></div>
          <div className="total">${total.toFixed(2)}</div>
      </div>
    
      </div>
      </>
    )}
      <div className="check-out-con">{cart.length >= 1 && <div className="check-out-btn">
           <button>check out </button>
        </div>}</div>
  </div>
  </div>
  <Footer />
         </>
        )
    }
}
export default Basket