import React from 'react'

import Item from './../../storeItemArr'
function Item2() {
 
  return (
   <>
  
    <div className="item-con-page">
    <div className="store-items-page">
           <div className="item1 store-item-page">
               <div className="img-item-page" style= {{backgroundImage: `url(${Item[1].img})`}}></div>
               <div className="item-text-page">
                   <h1>parts</h1>
                   <h1>${Item[1].price}</h1>
               </div>
               <div className="add-btn">
                   <button>add</button>
               </div>
           </div>
    </div>
    </div>
   </>
  );
}

export default Item2;