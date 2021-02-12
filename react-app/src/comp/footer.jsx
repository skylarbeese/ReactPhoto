import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
   <>
    <div className="footer-con">
      <div className="footer-text">
        <div className="name">
        <h1>Skylar Beese</h1>
        </div>
         <div  className="logo">
         <Link to=""><h1>S<span>B</span>PHOTO</h1></Link>
         <div className="link-font">
             <h1><i class="fab fa-instagram"></i></h1>
             <h1><i class="fab fa-facebook-f"></i></h1>
             </div>
         </div>
      </div>
       
    </div>
   </>
  );
}

export default Footer;