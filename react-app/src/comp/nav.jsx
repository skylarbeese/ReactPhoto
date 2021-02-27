import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
/*function WindowSize() {
  const [size, setSize] = React.useState([window.innerWidth, window.innerHeight])
  React.useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return size
} */
function Nav() {
 // const [width, height] = WindowSize();
 const [btn, setBtn] = React.useState(false)
  const [win, setWin] = React.useState(false)
  console.log(win)
 const hand = () => {
    if(window.innerWidth > 800) {
      setWin(true)
    } else {
      setWin(false)
    }
  }
  window.addEventListener("resize", hand);
 React.useEffect(() => {
    hand()
}, []);  
const btnHandler = () => {
  setBtn(!btn)
}
  return (
   <>

 {win ? (<> 
  <div className="nav-con">
         <nav>
          <div className="textt">
         <Link to=""><h1 class="lo">S<span>B</span>PHOTO</h1></Link>
             <ul>
                 <Link to=""><li>Home</li></Link>
                <Link to="/comp/contact1"><li> Contact</li></Link>
                 <Link to="/comp/galleryPage"><li>Gallery</li></Link>
                {/* <Link to="/comp/store"><li>Store</li></Link> */}
                 <Link to="/comp/store1"><li>Store/Print</li></Link>
             </ul>
             </div>
             <div className="link-font">
             <Link to=""><h1><i class="fab fa-instagram"></i></h1></Link>
             <Link to=""><h1><i class="fab fa-facebook-f"></i></h1></Link>
             </div>
         </nav>
        
     </div> </>) : (<>
   <div className="nav-c">
    <div className={`links-con ${btn ? 'menu-show' : 'menu-hide'}`}>
                <Link to=""><li>Home</li></Link>
                <Link to="/comp/contact1"><li> Contact</li></Link>
                <Link to="/comp/galleryPage"><li>Gallery</li></Link>
                <Link to="/comp/store1"><li>Store/Print</li></Link>
          <div className="link-font-sl">
                <Link to=""><h1><i class="fab fa-instagram"></i></h1></Link>
                <Link to=""><h1><i class="fab fa-facebook-f"></i></h1></Link>
           </div>
     </div> 
    <div className={`nav-link`} onClick={btnHandler}>

   
    
      
    
    <div className={`burger `} >
      <span className={` line1 `}></span>
        <span className={` line2 `}></span>
        <span className={` line3 `}></span>
      </div>
     </div>
   </div>
       </>
       )}
   </>
  );
}

export default Nav;
