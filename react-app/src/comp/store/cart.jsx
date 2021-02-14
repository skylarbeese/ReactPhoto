import React from 'react'

import Item from './../../storeItemArr'
function Cart({cart, onAdd, onRemove}) {
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0)
  const total = itemsPrice  
// console.log(props)
  return (
   <>
   <div className="cart-con">
    <div>{cart.length}</div>
    <div>{cart.length === 0 && <div>cart is empty</div>}</div>
    {cart.map((item) => {
      return <div key={item.itemId}>
       
        <div>
        <div>{item.name}</div>
          <div>{item.item}</div>
          <button onClick={() => onAdd(item)}>+</button>
          <button onClick={() => onRemove(item)}>-</button>
          <div>{item.qty} + {item.price}</div>
        </div>
       
      </div>

    })}
   
   {cart.length !== 0 && (
      <>
      
          <div>total </div>
          <div>${total.toFixed(2)}</div>
     
      </>
    )}
  </div>
   </>
  );
}

export default Cart;