import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav'
import Footer from './footer'
import Cart from './store/cart'

import Item from './../storeItemArr'
function Store() {
    const {products} = Item;
    const[cart, setCart] = React.useState([])
 
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
  console.log(products.id)
  return (
   <>
    <Nav />
  
  
   <div className="store-text">
            <h1>View my store</h1>
            <div className={`underline`}></div>
            <p>para</p>
    </div>
    <div className="cart">
    <Cart onAdd={onAdd} onRemove={onRemove}  cart={cart}/>
    </div>
   <main>
  


    <div className="store-ccon">
    
    <div className="store-con">
      <div className="store-items">
         {products.map(function(item, i) {
          return (
            <div className={`store-item item-${i}`} key={i}>
             
           
            <div className="item-img">
            <div className={`img-item-${i}`} style= {{backgroundImage: `url(${item.img})`}}></div>
            </div>
            <div className="name-item">
                 <h1>{item.name}</h1>
            </div>
            <div className="item-ch">
            {item.items.map(function(item, i) {
                     return (
                         <>
                         <div className="text-items" key={i}>
                             <div>{item.price}</div>
                            <div>{item.item}</div>
                           <button onClick={() => onAdd(item)}>add</button>
                        </div>
                            </>
                         );
                    })}
                    </div>
            </div>
            );
        })}
           
         </div>
    { /*      <div className="item1 store-item">
               <div className="img-item" style= {{backgroundImage: `url(${Item[0].img})`}}></div>
               <div className="item-text">
                   <Link to="./item1"><h1>parts</h1></Link>
                   <button onClick={() => onAdd(Item[0])}>add</button>
               </div>

           </div>

           <div className="item2 store-item">
               <div className="img-item" style= {{backgroundImage: `url(${Item[1].img})`}}></div>
               <div className="item-text">
               <Link to="./store/item2"><h1>parts</h1></Link>
               <button onClick={() => onAdd(Item[1])}>add</button>
               </div>
  </div> */}
           
        
 /</div>
      
    </div>
    </main>
   <Footer />
   </>
  );
}

export default Store;