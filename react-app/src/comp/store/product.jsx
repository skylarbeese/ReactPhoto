import React, { Component } from 'react';
import { DataContext } from './context'
import { Link } from 'react-router-dom'
class Product extends Component {
    static contextType = DataContext 
render() {
    const  {product} = this.context
    return (
      <>
      
      <main>
  


  <div className="store-ccon">
  <div className="item-title-he">
          <h1>Store</h1>
          <div className={`underline`}></div>
          <p>
          Cow short loin shoulder hamburger jerky jowl. Bacon salami tail, 
          corned beef ribeye turkey chislic capicola. Sausage rump t-bone doner, 
          swine pork chop tenderloin hamburger capicola shank. Short loin ball 
        
          </p>
          </div>
  <div className="store-con">
    <div className="store-items">
       {product.map(function(item, i) {
        return (
          <div className={`store-item item-${i}`} key={i}>
           
         
          <div className="item-img">
          <div className={`img-item img-item-${i}`} style= {{backgroundImage: `url(${item.img})`}}></div>
          </div>
          <div className="name-item">
          <h1 className="item-name"><Link to={`/comp/store1/${item.id}`}>{item.name}</Link></h1>
              
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
}

export default Product;