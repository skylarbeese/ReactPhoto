import React, {Component} from 'react'
export const DataContext = React.createContext()
export class DataProvider extends Component  {
    state = {
        product: [
            {id:"1" , 
          
            img: "/img/img31.jpg", 
            name: "salt late temple",
            items: [
                { itemId:1, item: "9x14", price: "300", name: "salt late temple"}, 
                { itemId:2, item: "10x15", price: "340", name: "salt late temple"} 
            ],
             
        
            count: 1
            },
            {id:"2" , 
         
            img: "/img/img39.jpg", 
            name: "mountain",
            items: [
                { itemId:3, item: "9x14", price: "300", name: "mountian"}, 
                { itemId:4, item: "10x15", price: "340", name: "mountian" } 
            ],
               
               
         
            count: 1
            },
        
        ],
        cart: []
    }
    onAdd = (id) => {
      const{cart} = this.state
       const exist = cart.find(x => x.itemId === id.itemId)
        if(exist) {
          this.setState({cart: (cart.map(x => x.itemId === id.itemId ? {
            ...exist, qty: exist.qty + 1 
          } : x ))})
        } else {
          this.setState({cart: ([...cart, {...id, qty: 1}])})
        } 

   
    }
    onRemove = (id) => {
        const{cart} = this.state
        const exist = cart.find(x => x.itemId === id.itemId)
      if(exist.qty === 1 ) {
         this.setState({cart: (cart.filter(x => x.itemId !== id.itemId))})
      } else {
         this.setState({cart: (cart.map(x => x.itemId === id.itemId ? { ...exist, qty: exist.qty - 1} : x))})
      }
    
    }
    add = () => {
        
    }
    red = () => {
        
    }
    render() {
        
        const {product, cart} = this.state
        const {onAdd, add, red, onRemove} = this
        return (
            <>
             <DataContext.Provider value={{product, cart, onAdd, add, red, onRemove}}>
                 {this.props.children}
             </DataContext.Provider>
            </>
        )
    }

    
}