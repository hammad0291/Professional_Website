import React from 'react'
import Apply_online from './Apply_online'
import Footer from './Footer'
import Navbar from './Navbar'
import Sticky_Container from './Sticky_Container'

export default function Fee_struc() {
  return (
    <>
    <Navbar/>
    <Sticky_Container/>
    <Apply_online/>
    <div className="bg-1">
    <div className="para-3 lelo" style={{marginTop: "116px"}}>
      <p>Professionals Fee Structure</p>
    </div>
  </div>
  <div className="intro" style={{marginTop: "86px" ,marginLeft: "360px" ,marginRight: "394px", padding: "1rem"}}>
    <p style={{marginTop: "300px" , color: "black", fontSize: "17px"}}>
    <h1 style={{lineHeight: "2.5em", color: "#a2a2cb", fontWeight: "700"}}>FEE STRUCTURE</h1>The PROFESSIONAL EDUCATIONAL SYSTEM is
    now accepting applications for school admissions from Playgroup to Intermediate. In this section, you can find information
    pertaining to the fee structure as part of the school admission procedure. These involve a registration fee, an
    admission fee and a tuition fee, among other charges. A detailed breakdown of the fee structure and available
    discounts can be found below. If you wish to submit an online application for admission in PROFESSIONAL EDUCATIONAL SYSTEM, you may do so here.
    </p>
  </div>
  <div className="tables" style={{marginLeft: "360px", marginRight: "394px", padding: "1rem"}}>
    <h4 style={{lineHeight: "2.5em", fontSize: "25px", color: "#a2a2cb", fontWeight: "700"}}>PRE SCHOOL:</h4>
    <div style={{marginBottom: "28px"}}>
      <table id="customers">
        <tr>
          <td><b>Registration Fee</b></td>
          <td><b>Monthly Fee</b></td>
          <td><b>Admission Charges</b></td>
        </tr>
        <tr>
          <td><b>10,000</b></td>
          <td><b>5000</b></td>
          <td><b>x---x---x</b></td>
        </tr>

      </table>
    </div>
    <h4 style={{lineHeight: "2.5em", fontSize: "25px", color: "#a2a2cb", "fontWeight": "700"}}>PRIMARY TO SECONDARY:</h4>
    <div style={{marginBottom: "28px"}}>
      <table id="customers">
        <tr>
          <td>Registration Fee</td>
          <td>Monthly Fee</td>
          <td>Admission Charges</td>
        </tr>
        <tr>
          <td><b>10,000</b></td>
          <td><b>5000</b></td>
          <td><b>x---x---x</b></td>
        </tr>
      </table>
    </div>
    <h4 style={{lineHeight: "2.5em", color: "#a2a2cb", fontWeight: "700"}}>NOTE:</h4>
    <div>
      <ul>
        <li>Lab charges 2000/- for IX, X students only.
        </li>
        <li>Annual charges equivalent to one month fee is applicable.
        </li>
        <li>Late fee charges are Rs. 10/- per day.
        </li>
        <li>Science lab charges Rs.100/- per month (Allowed from className VIII to Class X only).
        </li>
      </ul>
    </div>
    <h4  style={{lineHeight: "2.5em", color: "#a2a2cb", fontWeight: "700"}}>COLLEGEATE FEE IX TO XII:</h4>
    <div>
      <table id="customers">
        <tr>
          <td><b>Registration Fee</b></td>
          <td><b>Admission Charges</b></td>
          <td><b>Monthly Fee</b></td>
        </tr>
        <tr>
          <td><b>1500 (IX) and (X)</b></td>
          <td><b>x---x---x</b></td>
          <td><b>5500 (IX) and (X)</b></td>
        </tr>
        <tr>
          <td><b>1500 (XI) and (XII)</b></td>
          <td><b>x---x---x</b></td>
          <td><b>6000 (XI) and (XII)</b></td>
        </tr>

      </table>
    </div>
    <h4 style={{lineHeight: "3.5em", color: "#a2a2cb", fontWeight: "700"}}>ECAT AND MCAT APTITUDE TEST FEE:</h4>
    <div>
      <table id="customers">
        <tr>
          <td><b>Tuition Fee (One Time)</b></td>
          <td><b>Admission Charges</b></td>
          <td><b>Registration Fee</b></td>
        </tr>
        <tr>
          <td><b>40,000 (ECAT)</b></td>
          <td><b>x---x---x</b></td>
          <td><b>x---x---x</b></td>
        </tr>
        <tr>
          <td><b>45,000 (MCAT)</b></td>
          <td><b>x---x---x</b></td>
          <td><b>x---x---x</b></td>
        </tr>
        

      </table>
    </div>
  </div>
  <Footer/>
    </>
  )
}
