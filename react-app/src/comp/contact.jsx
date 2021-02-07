import React from 'react'
import Arr from './../imgArray'
import Nav from './nav'
import Footer from './footer'
function Contact() {
 
  return (
   <>
   <section>
   <Nav />
    <div className="contact-con">
      <div className="contact-text">

      </div>
      <div className="bottom">
      <div className="contact-footer-img">
      <div className="grad-form"></div> 
      <div className="footer-img" style= {{backgroundImage: `url(${Arr[0]})`}}></div>
      </div>
      <div className="con-form">
        <form>
          <h1> Send me a message! </h1>
          <div className="con-input">
            <div className="in-con">
           <label for="name">Enter your name* </label>
              <input type="text" name="name" placeholder="Enter your full name"/>
             </div>
             <div className="in-con">
           <label for="email">Enter your email address* </label>
              <input type="text" name="email" placeholder="Enter your email address"/>
              </div>
            </div>
           <label for="textarea">Type your message here* </label>
               <textarea name="message" id="" rows="" placeholder="type your message..."></textarea>
           <button>send message</button>
        </form>
      </div>
      </div>
    </div>
    <Footer />
    </section>
   </>
  );
}

export default Contact;