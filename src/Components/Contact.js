import React from 'react'
import background from "../Images/contact-1.jpg";
import Apply_online from './Apply_online';
import Footer from './Footer';
import Navbar from './Navbar';
import Sticky_Container from './Sticky_Container';

export default function Contact() {
  return (
<>
<Navbar/>
<Sticky_Container/>
<Apply_online/>
     <div className="container-contact100">
      <div className="wrap-contact100">
          <form className="contact100-form validate-form">
              <span className="contact100-form-title">
                  Send Us A Message
              </span>
              <label className="label-input100" for="first-name">Tell us your name *</label>
              <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                  <input id="first-name" className="input100" type="text" name="first-name" placeholder="First name"/>
                  <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                  <input className="input100" type="text" name="last-name" placeholder="Last name"/>
                  <span className="focus-input100"></span>
              </div>
              <label className="label-input100" for="email">Enter your email *</label>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com"/>
                  <span className="focus-input100"></span>
              </div>
              <label className="label-input100" for="phone">Enter phone number</label>
              <div className="wrap-input100">
                  <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +92 123456789"/>
                  <span className="focus-input100"></span>
              </div>
              <label className="label-input100" for="message">Message *</label>
              <div className="wrap-input100 validate-input" data-validate="Message is required">
                  <textarea id="message" className="input100" name="message" placeholder="Write us a message"></textarea>
                  <span className="focus-input100"></span>
              </div>
              <div className="container-contact100-form-btn">
                  <button className="contact100-form-btn">
                      Send Message
                  </button>
              </div>
          </form>
          <div className="contact100-more flex-col-c-m" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center"}}>
              <div className="flex-w size1 p-b-47">
                  <div className="txt1 p-r-25">
                      <span className="lnr lnr-map-marker"></span>
                  </div>
                  <div className="flex-col size2">
                      <span className="txt1 p-b-20">
                          Address
                      </span>
                      <span className="txt2">
                          <br/>A1/9, Near Byco Petrol Pump, Abul Hasan Isphahani Rd, Block 4 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Karachi, Pakistan
                      </span>
                
                  </div>
              </div>
              <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                      <span className="lnr lnr-phone-handset"></span>
                  </div>
                  <div className="flex-col size2">
                      <span className="txt1 p-b-20">
                          Lets Talk
                      </span>
                      <span className="txt3"><br/>
                        0300-9270624, 0330-2881749
                        021
                        
                      </span>
                  </div>
              </div>
              <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                      <span className="lnr lnr-envelope"></span>
                  </div>
                  <div className="flex-col size2">
                      <span className="txt1 p-b-20">
                          Email 
                      </span>
                      <p className="email-contactform doing">syedfaizanahmed38@hotmail.com</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div id="dropDownSelect1"></div>
    <Footer/>
</>
  )
}
