import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
   <>
     <div className="nav-con">
         <nav>
          <div className="textt">
         <Link to=""><h1 class="lo">S<span>B</span>PHOTO</h1></Link>
             <ul>
                 <Link to=""><li>Home</li></Link>
                <Link to="/comp/contact1"><li> Contact</li></Link>
                 <Link to="/comp/galleryPage"><li>Gallery</li></Link>
                 <Link to="/comp/store"><li>Store</li></Link>
             </ul>
             </div>
             <div className="link-font">
             <Link to=""><h1><i class="fab fa-instagram"></i></h1></Link>
             <Link to=""><h1><i class="fab fa-facebook-f"></i></h1></Link>
             </div>
         </nav>
        
     </div>
   </>
  );
}

export default Nav;
