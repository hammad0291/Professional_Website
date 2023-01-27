import React from 'react'
import AdmissionImage from "../Images/form_sub.jpg"
import Apply_online from './Apply_online'
import Footer from './Footer'
import Navbar from './Navbar'
import Sticky_Container from './Sticky_Container'
import Whatsapp_button from './Whatsapp_button'
export default function Admiision_policy() {
  return (
    <>
    <Navbar/>
    <Sticky_Container/>
    <Apply_online/>
    <div className="bg-8">
        <div className="para-12">
            <p>Begin your journey with <br/>the first step in the<br/>right direction</p>
        </div>
    </div>
    <div className="start">
        <div className="admi"><h2>ADMISSION PROCESS</h2></div>
        <div className="imgs"><img src={AdmissionImage} alt=""/></div>
    </div><hr className="dividing"/>
    <div className="head">
        <div className="head-1">
            <h4 className="dekh">ADMISSION PROCEDURE AND POLICY</h4>
            <p>As PROFESSIONAL EDUCATIONAL SYSTEM is now accepting applications for admissions in our institution, you can find general information relating to the PROFESSIONAL EDUCATIONAL SYSTEM admission procedure and policy in this section</p>
            <p>You can apply for preschool admissions, primary school admissions, middle school admissions and/or senior school admissions. The exact school admission procedure for each of these stages of education according to campus can be found by establishing contact with that campus</p>
            <p>If you wish to do this by starting an online application for school admission in PROFESSIONAL EDUCATIONAL SYSTEM, you may do so here. If you wish to know about the PROFESSIONAL EDUCATIONAL SYSTEM admission fee, please visit our section on Fee Structure.</p>
            <h4 style={{color: "#a2a2cb"}}>Step 1</h4>
            <p>Admission is based on merit, availability of seats and sibling reference. Those found suitable are issued admission forms.</p>
            <h4 style={{color: "#a2a2cb"}}>Step 2</h4>
            <p>Once the admission is approved by the principal, the necessary fee challan is issued. Admission will be confirmed on deposit of fee as well as the completion of steps 3 and 4.</p>
            <h4 style={{color: "#a2a2cb"}}>Step 3</h4>
            <p>Fresh admissions need to submit the following documents:</p>
            <p><ul>
            <li>Parent’s/guardian’s CNIC copy</li>
            <li>Birth certificate of the applicant</li>
            <li>Two 1”x1” sized latest photographs of the student
            </li>
            </ul></p>
            <h4 style={{color: "#a2a2cb"}}>Step 4</h4>
            <p>For admission through migration, applicants need to submit the following documents:</p>
            <ul>
                <li>Parent’s/guardian’s CNIC copy</li>
                <li>Two 1”x1” sized latest photographs of the student</li>
                <li>School leaving certificate</li>
                <li>Last progress report</li>
                </ul>
            
            <p><span style={{fontSize: "80%"}}>Any Info Please Visit The Campus</span></p>
        </div>
    </div>
    <Footer/>
    <Whatsapp_button/>
    </>
  )
}
