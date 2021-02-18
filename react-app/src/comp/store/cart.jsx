import React from 'react'


function Cart({cart, onAdd, onRemove, show}) {
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0)
  const total = itemsPrice  
  
  return (
   <>
   <div className={`cart-con `} >
     <div className={"cart-title"} >
     
       <h1 onClick={show}>Cart</h1>
       <div className={`underline`}></div>
     </div>
    {/*<div>{cart.length}</div> */}
    <div>{cart.length === 0 && <div>cart is empty</div>}</div>
    {cart.map((item) => {
      return <div key={item.itemId}>
       
        <div className="item-ind">
       
        <div className="item-cart-name">{item.name}</div>
        <div className={`underline`}></div>
          <div>print size: {item.item}</div>
          <div className="q-price">
          <div>how meny of this item: {item.qty}</div>
        
          <div>${item.price}</div>
        </div>
        <div className="add-minus-btn">
          <button onClick={() => onAdd(item)}>+</button>
          <button onClick={() => onRemove(item)}>-</button>
        </div>
       
        </div>
       
      </div>

    })}
   
   {cart.length !== 0 && (
      <>
      <div className="final-price">
          <div className="total-text">total price</div>
      <div className="price-total">
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
   </>
  );
}

export default Cart;