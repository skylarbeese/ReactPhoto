import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './nav'
import Footer from './footer'
import Cart from './store/cart'
import Item from './../storeItemArr'
function Store() {
    const[cart, setCart] = React.useState([])
    const onAdd = () => {

    }
    const onRemove = () => {
        
    }
  return (
   <>
   <Nav />
   <div className="store-text">
            
            <h1>View my store</h1>
            <div className={`underline`}></div>
            <p>para</p>
        </div>
    <div className="store-con">
     
         <div className="store-items">
           <div className="item1 store-item">
               <div className="img-item" style= {{backgroundImage: `url(${Item[0].img})`}}></div>
               <div className="item-text">
                   <Link to="./store/item1"><h1>parts</h1></Link>
                   <h1>${Item[0].price}</h1>
               </div>
           </div>

           <div className="item2 store-item">
               <div className="img-item" style= {{backgroundImage: `url(${Item[1].img})`}}></div>
               <div className="item-text">
               <Link to="./store/item2"><h1>parts</h1></Link>
                   <h1>${Item[1].price}</h1>
               </div>
           </div>
           
        

         </div>
    </div>
    <Cart onAdd={onAdd} onRemove={onRemove} setCart={setCart} cart={cart}/>
   <Footer />
   </>
  );
}

export default Store;