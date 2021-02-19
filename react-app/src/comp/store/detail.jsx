import React, {Component} from 'react'
import { DataContext } from './context';
import {Link } from 'react-router-dom'
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
           
              <main>
  

              <div className="header-item">
       <h1>Hello</h1>
       <div className={`underline`}></div>
     </div>
  <div className="store-con">
    
       {product.map(function(item, i) {
        return (
          <div className={`store-item-it item-${i}`} key={i}>
           
         
          <div className="img-detail">
          <div className={`img-d img-item-${i}`} style= {{backgroundImage: `url(${item.img})`}}></div>
          </div>
          
               
              
        
          <div className="item-ch">
          <div className="item-title">
          <h1>{item.name}</h1>
          <div className={`underline`}></div>
          <p>
          Cow short loin shoulder hamburger jerky jowl. Bacon salami tail, 
          corned beef ribeye turkey chislic capicola. Sausage rump t-bone doner, 
          swine pork chop tenderloin hamburger capicola shank. Short loin ball 
        
          </p>
          </div>
          <div className="item-con-info">
      {item.items.map(function(item, i) {
                   return (
                       <>
                   
                       <div className="item-text-price" key={i}>
                        <div className="size">
                       <div>{item.item}</div>
                       <div className={`underline`}></div>
                       </div>
                       <div className="items-btn">
                     <div >${item.price}</div>
                     <button onClick={() => onAdd(item)}>add</button> 
                     </div>
                     </div>
                         
                  
                      </>
                       );

                  })} 
                  </div>
                  </div>
          </div>
          );
      })}
         
      
    
      </div>
      <Link to="/comp/store1"><div className="go-back">
        <div className="d">
        <h1>shop more</h1>
        <i class="fas fa-angle-right"></i>
        </div>
      </div></Link>
  </main>
            </>
        )
    }
}

export default Detail;