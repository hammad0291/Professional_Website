import React from 'react'
import Apply_online from './Apply_online'
import Footer from './Footer'
import Navbar from './Navbar'
import Sticky_Container from './Sticky_Container'

export default function Refistration() {
  return (
    <>
    <Navbar/>
    <Sticky_Container/>
    <Apply_online/>
    <div class="bg">
        <div class="ptm_log">
            <div class="para-2">
                <p>Professionals Online Registration</p>
            </div>
        </div>
    </div>
    <div class="admmission">
        <h2 style={{lineHeight: "1.5em", color: "#a2a2cb", fontWeight: "700"}}>Admission Form Guidelines</h2>
        <a href="M320-workload-IOT (1).pdf" target="_blank">
            <button class="downkro"><i class="fa fa-download"></i> Download Application form</button>
          </a>
            <p>To begin the  admission procedure, please fill out the form below and make sure that the information provided is complete and accurate. Please note that you can apply for admissions in our Education field. In case of any query, please comment in the relevant section.</p>
        <p>On submitting the application, the concerned campus will contact you with further information.</p>
        
        </div>
        <form className='zindagi' action="/action_page.php">
            <label for="fname">Student's Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>

            <label for="lname">Father's / Guardian's Name:</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>

            <label for="lname">Student's Cell#:</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Cell No.." required/><br/>

            <label for="lname">Father/Guardian's Cell#:</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Cell No.." required/><br/>
            <label for="email">Enter your email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email.." required/>


            <label for="birthday">Date of Birth:</label>
            <input type="date" id="birthday" name="birthday" required/>
            <div class="roads">
                <p  style={{marginTop: "12px", marginBottom: "9px"}}>Gender:</p>
                <input type='radio' id='male' checked='checked' name='radio' required/>
                <label for='male'>Male</label>
                <input type='radio' id='male' checked='checked' name='radio' required/>
                <label for='male'>Female</label><br/>
            </div>
            <div class="addr">
                <p style= {{marginTop: "12px" , marginBottom: "5px"}}>Address:</p>
                <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
            </div>
            <div class="applied">
                <label for="country">Course Applied for:</label>
            </div>
            <div class="opt">
                <select id="country" name="country">
                    <option value="australia">Select(one)</option>
                    <option value="canada">PRE TO PRIMARY</option>
                    <option value="usa">PRIMARY TO SECONDARY</option>
                    <option value="usa">Intermediate HSCI, HSCII</option>
                    <option value="usa">ECAT and MCAT</option>
                </select>
            </div>

            <input type="submit" value="Submit"/>
        </form>
        <Footer/>
    </>
  )
}
