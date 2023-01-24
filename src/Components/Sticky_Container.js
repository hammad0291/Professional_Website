import React from 'react'
import facebook from "../Images/cic-fac.png";
import google from "../Images/circ-google.png";
import twitter from "../Images/circ-twit.png";
import instagram from "../Images/circ-inst.png";

export default function Sticky_Container() {
  return (
    <>
    <div className="sticky-container">
    <ul className="sticky">
        <li>
        <img src={facebook} width="32" height="32"/>
            <p><a href="https://www.facebook.com/ProfessionalCollegiate/" target="_blank">Like Us on<br/>Facebook</a></p>
        </li>
        <li>
        <img src={twitter} width="32" height="32"/>
            <p><a href="https://www.twitter.com" target="_blank">Follow Us on<br/>Twitter</a></p>
        </li>
        <li>
        <img src={google} width="32" height="32"/>
            <p><a href="https://www.gmail.com" target="_blank">Follow Us on<br/>Google</a></p>
        </li>
        <li>
        <img src={instagram} width="32" height="32"/>
            <p><a href="https://www.instagram.com/professionalcollegiate/" target="_blank">Follow Us on<br/>Instagram</a></p>
        </li>
    </ul>
</div>
    </>
  )
}
