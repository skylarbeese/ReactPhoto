import React from 'react'
import './App.css';
import Home from './home'

import Store1 from './comp/store1'
import Contact1 from './comp/contact'
import GalleryPage from './comp/galleryPage'
import Store from './comp/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import Cart from './comp/store/cart'
function App() {
  return (
   <>
    <Router>
     <Switch>
    {/* <Route path="/comp/store/cart" component={Cart} /> */}
    =
    <Route path="/comp/store1" component={Store1} />
     <Route path="/comp/store" component={Store} />
        <Route path="/comp/contact1" component={Contact1} />
        <Route path="/comp/galleryPage" component={GalleryPage} />
        <Route path="/"  component={Home} />
  
        

     
        
        </Switch>
    </Router>
     
     
   </>
);
}

export default App;
