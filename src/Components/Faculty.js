import React from 'react'
import Faculty1 from "../Images/faculty-1.png";
import Faculty2 from "../Images/faculty-2.png";
import Faculty3 from "../Images/faculty-3.png";
import Faculty4 from "../Images/faculty-4.png";
import Faculty5 from "../Images/faculty-5.png";
import Faculty6 from "../Images/faculty-6.png";
import Faculty7 from "../Images/faculty-7.png";
import Faculty8 from "../Images/faculty-8.png";
import Faculty9 from "../Images/faculty-9.png";
import Faculty10 from "../Images/faculty-10.png";
import Faculty11 from "../Images/faculty-11.png";
import Faculty12 from "../Images/faculty-12.png";
import Navbar from './Navbar';
import Sticky_Container from './Sticky_Container';
import Apply_online from './Apply_online';
import Footer from './Footer';


export default function Faculty() {
  return (
    <>
    <Navbar/>
    <Sticky_Container/>
    <Apply_online/>
    <div className="text">
    <h1>Our Faculty</h1>
    <p>the professionals collegiate</p>
  </div>
  <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
  <div className="grid-container">
      <figure className="snip1390">
      <img src={Faculty1} alt="profile-sample3"
        className="profile" />
      <figcaption>
        <h2>SIR NAZIM</h2>
        <h4>ACCOUNTING</h4>
        <span>(Teaching since 2000)</span>
        <blockquote>Accounting is the process of measuring, processing or work of keeping financial accounts.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390 hover"><img src={Faculty2}
        alt="profile-sample5" className="profile" />
      <figcaption>
        <h2>SIR SHAYAN</h2>
        <h4>MATHEMATICS</h4>
        <span>(Teaching since 2013)</span>
        <blockquote>Mathematics is the most beautiful and most powerful creation of the human spirit.
        </blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty3}
        alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR FARAN</h2>
        <h4>ENGLISH</h4>
        <span>(Teaching since 2000)</span>
        <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell
          the difference.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty4}
        alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR ABID</h2>
        <h4>SINDHI</h4>
        <span>(Teaching since 2000)</span>
        <blockquote>Sindhis are philosophical and hence they have made invaluable observations of life in the form of sayings and Proverbs.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty5}
        alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR MUNEEF</h2>
        <h4>PHYSICS</h4>
        <span>(Teaching since 2013)</span>
        <blockquote>Physics is one of the most important subjects and areas of study which fuels most of the work we get done by today's machine</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty6}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR ARSHAD</h2>
        <h4>COMPUTER</h4>
        <span>(Teaching since 1998)</span>
        <blockquote>The computer was born to solve problems that did not exist before.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty7}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>DR.ZAIN</h2>
        <h4>BIOLOGY</h4>
        <span>(Teaching since 2016)</span>
        <blockquote>Biology is the study of complicated things that give the appearance of having been designed for a purpose</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty8}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR ANWAR</h2>
        <h4>CHEMISTRY</h4>
        <span>(Teaching since 2000)</span>
        <blockquote>Chemistry begins in the stars. The stars are the source of the chemical elements, which are the building blocks of matter and the core of our subject.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty9}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR SAAD</h2>
        <h4>URDU</h4>
        <span>(Teaching since 2013)</span>
        <blockquote>Urdu is an Indo-Aryan language spoken chiefly in South Asia. It is the national language and lingua franca of Pakistan, where it is also an official language alongside English.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty10}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR BILAL</h2>
        <h4>ISLAMIAT</h4>
        <span>(Teaching since 2007)</span>
        <blockquote>Here are all the possible meanings and translations of the word islamiat.</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty11}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR YOUSUF</h2>
        <h4>POC/C.G</h4>
        <span>(Teaching since 2012)</span>
        <blockquote>It is the aggregate of all the activities which take place between the producer and the consumers</blockquote>
      </figcaption>
    </figure>
    <figure className="snip1390"><img src={Faculty12}
    alt="profile-sample6" className="profile" />
      <figcaption>
        <h2>SIR FAIZAN</h2>
        <h4>MATHS CLASS IX</h4>
        <span>(Teaching since 2010)</span>
        <blockquote>It is clear that the chief end of mathematical study must be to make the students think.</blockquote>
      </figcaption>
    </figure>
  </div>
  <Footer/>
    </>
  )
}
