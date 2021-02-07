import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
   <>
     <div className="nav-con">
         <nav>
             <ul>
                 <Link to=""><li>Home</li></Link>
                <Link to="/comp/contact"><li> Contact</li></Link>
                 <Link to="/comp/galleryPage"><li>Gallery</li></Link>
             </ul>
         </nav>
     </div>
   </>
  );
}

export default Nav;
