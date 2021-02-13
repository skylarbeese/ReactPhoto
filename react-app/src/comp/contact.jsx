import React from 'react'
import Arr from './../imgArr1'
import Nav from './nav'
import Footer from './footer'
import EmailJs from 'emailjs-com'
function Contact() {
  const sendEmail = (e) => {
    e.preventDefault()
 
    EmailJs.sendForm('gmail', 'template_0y45lja', e.target, 'user_xy8ABjwAfQzsJe1G1xVR6')
    .then((result) => {
     console.log(result.text);
 }, (error) => {
     console.log(error.text);
 });
   e.target.reset()
   }
  return (
   <>
   <section>
   <Nav />
    <div className="contact">
      <div className="form">
     <div className="header-text">
         <h1 className="head"> Send me a message! </h1>
         <p>
               send me an email right here on my web page! keep up to date with activities and
               shoots, I would love for you to come join my workshops!
            </p>
         <div className="underline-contact"></div>
          </div>
          
          <div className="con-form">
          
        <form onSubmit={sendEmail}>
      
          <div className="con-input">
            <div className="in-con">
            <input type="hidden" name="to_name" />
           <label>Enter your name* </label>
              <input type="text" name="name" placeholder="Enter your full name"/>
             </div>
             <div className="in-con">
           <label>Enter your email address* </label>
              <input type="text" name="email" placeholder="Enter your email address"/>
              </div>
            </div>
           <label>Type your message here* </label>
               <textarea name="message" id="" rows="" placeholder="type your message..."></textarea>
           <label>required fields* </label>
           <button type="submit" value="Send" >send message</button>
        </form>
     </div>
   </div> 

     <div className="img-contact">
     <div className="img" style= {{backgroundImage: `url(${Arr})`}}></div>
       </div>

    
    </div>
    <Footer />
    </section>
   </>
  );
}

export default Contact;