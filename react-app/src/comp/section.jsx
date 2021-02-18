import React, { Component } from 'react';
import Product from "./store/product"
//import Cart from "./store/cart"
import Detail from "./store/detail"
import Basket from './basket'
import Header from './header'
import { DataProvider } from './store/context'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class Section extends Component {

render() {

    return (
      <>
      <DataProvider>
      <Header />
      <Switch>
           <Route path="/comp/store1" component={Product} exact/>
          
           <Route path="/comp/store1/:id" component={Detail}  />
       </Switch>
       </DataProvider>
      </>
  );
}
}

export default Section;