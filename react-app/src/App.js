import React from 'react'
import './App.css';
import Home from './home'
import Contact from './comp/contact'
import GalleryPage from './comp/galleryPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
   <>
    <Router>
     <Switch>
        <Route path="/comp/contact" component={Contact} />
        <Route path="/comp/galleryPage" component={GalleryPage} />
        <Route path=""  component={Home} />
  
        

     
        
        </Switch>
    </Router>
     
     
   </>
);
}

export default App;
