import React, {Component} from 'react'
import { DataContext } from './context';

class Detail extends React.Component {
    static contextType = DataContext
    
    state = {
      product: []
    }
    getPro() {
      if(this.props.match.params.id) {
        const res = this.context.product
        const data = res.filter(item => {
          return item.id === this.props.match.params.id
         
        })
        this.setState({product: data})
        console.log(this.context.product)
        console.log(this.props.match.params.id)
        
      }
    }
    
    componentDidMount() {
      this.getPro()
    }
    
      render() {
    
        const {product} = this.state
        const {onAdd, cart} = this.context
     
    
        return (
            <>
              <h1>details</h1>
              <main>
  


  <div className="store-ccon">
  
  <div className="store-con">
    <div className="store-items">
       {product.map(function(item, i) {
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
        )
    }
}

export default Detail;