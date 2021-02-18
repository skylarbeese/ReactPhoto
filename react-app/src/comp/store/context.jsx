import React, {Component} from 'react'
export const DataContext = React.createContext()
export class DataProvider extends Component  {
    state = {
        product: [
            {id:"1" , 
            idItem: 1,
            img: "/img/img31.jpg", 
            name: "salt late temple",
            items: [
                {itemId:1, item: "11x13", price: "300", name: "salt late temple"},
                {itemId:2, item: "8x14", price: "240", name: "salt late temple"}
            ],
            count: 1
            },
            {id:"2" , 
            idItem: 2,
            img: "/img/img39.jpg", 
            name: "mountain",
            items: [
                {itemId:3, item: "11x13", price: "300", name: "salt late temple"},
                {itemId:4, item: "8x14", price: "240", name: "salt late temple"}
            ],
            count: 1
            },
        
        ],
        cart: []
    }
    onAdd = (id) => {
        const{cart, product} = this.state
        const check = cart.every(item => {
        return item.items.itemId !== id
        })
        if(check) {
            const data = product.filter(item => {
                return item.items.itemId === id
            })
            this.setState({cart: [...cart, ...data]})
           
        }
    }
    onRemove = () => {
        
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