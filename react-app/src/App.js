import React from 'react'
import './App.css';
import Home from './home'
import Item1 from './comp/store/item1'
import Item2 from './comp/store/item2'
import Contact1 from './comp/contact'
import GalleryPage from './comp/galleryPage'
import Store from './comp/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
   <>
    <Router>
     <Switch>
     <Route path="/comp/store/item1" component={Item1} />
     <Route path="/comp/store/item2" component={Item2} />
     <Route path="/comp/store" component={Store} />
        <Route path="/comp/contact1" component={Contact1} />
        <Route path="/comp/galleryPage" component={GalleryPage} />
        <Route path=""  component={Home} />
  
        

     
        
        </Switch>
    </Router>
     
     
   </>
);
}

export default App;
