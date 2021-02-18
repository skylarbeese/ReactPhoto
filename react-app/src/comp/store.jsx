import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav'
import Footer from './footer'
import Cart from './store/cart'

import Item from './../storeItemArr'
function Store() {
    const {products} = Item;
    const[cart, setCart] = React.useState([])
    const[cartSlide, setCartSlider] = React.useState(false)
    const show = () => {
      setCartSlider(!cartSlide)
      console.log('click')
    }
    console.log(cartSlide)

   const onAdd = (product) => {
      const exist = cart.find(x => x.itemId === product.itemId)
      if(exist) {
        setCart(cart.map(x => x.itemId === product.itemId ? {
          ...exist, qty: exist.qty + 1 
        } : x ))
      } else {
        setCart([...cart, {...product, qty: 1}])
      }
    }
  
  const onRemove = (product) => {
      const exist = cart.find(x => x.itemId === product.itemId)
      if(exist.qty === 1 ) {
         setCart(cart.filter(x => x.itemId !== product.itemId))
      } else {
         setCart(cart.map(x => x.itemId === product.itemId ? { ...exist, qty: exist.qty - 1} : x))
      }
    }
   

 
  return (
   <>
    <Nav />
   <div className="cart-btn-con">
    <div className="cart-btn">
         
            <p>Cart Items(<div>{cart.length}</div>) </p>
            <h1 onClick={show}><i class="fas fa-shopping-cart"></i></h1>
          </div>
          </div>
   <div className="store-text">
            <h1>View my store</h1>
            <div className={`underline`}></div>
            <p>para</p>
        
    </div>
    
    <div className={`cart ${cartSlide ? 'slideShow' : 'slideHide'}`}>
    <Cart onAdd={onAdd} onRemove={onRemove}  cart={cart} cartSlide={cartSlide} setCartSlider={setCartSlider} show={show}/>
    </div>
   <main>
  


    <div className="store-ccon">
    
    <div className="store-con">
      <div className="store-items">
         {products.map(function(item, i) {
          return (
            <div className={`store-item item-${i}`} key={i}>
             
           
            <div className="item-img">
            <div className={`img-item img-item-${i}`} style= {{backgroundImage: `url(${item.img})`}}></div>
            </div>
            <div className="name-item">
                 <h1>{item.name}</h1>
                
            </div>
            <div className="item-ch">
            {item.items.map(function(item, i) {
                     return (
                         <>
                         
                         <div className="text-items" key={i}>
                        <div className="text-store-info">
                          <div className="item-size-size">
                         <div className="item-size">{item.item}</div>
                         <div className={`underline`}></div>
                         </div>
                         <div className="items-btn">
                       <div className="item-price">${item.price}</div>
                       <button onClick={() => onAdd(item)}>add</button> 
                       </div>
                       </div>
                           
                        </div>
                            </>
                         );
                    })}
                    </div>
            </div>
            );
        })}
           
         </div>
   
           
        
          </div>
      
        </div>
    </main>
  
   </>
  );
}

export default Store;