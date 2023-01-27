import React from 'react'
import director1 from "../Images/director-1-modified.png";
import director2 from "../Images/director-2-modified.png";
import director3 from "../Images/gallery-16-modified.png";
import Apply_online from './Apply_online';
import Footer from './Footer';
import Navbar from './Navbar';
import Sticky_Container from './Sticky_Container';


 function Director () {
  return (
    <>
    <Navbar/>
    <Apply_online/>
    <Sticky_Container/>
    <div className="section">
        <img src={director1} alt=""/>
        <div className="text">
            <h1>Sir Salman</h1>
            <p>Professional Collegiate has been striving for twenty-one years to provide quality education to our young generation. An objective set by the founding members of this institute is to offer perfect quality education by building a friendly environment necessary for a student to achieve better learning and progressive growth in their desirable academic disciplines. Professional Collegiate has gathered highly qualified and experienced teaching faculty along with the energetic management staff to provide our students a good learning and developing environment
                </p>
        </div>

    </div>
    <div className="section faizu">
        <div className="text">
            <h1>Sir Faizan</h1>
            <p>Quality of education is the concern of all organizations across the world. With the increase in science and technological advancement, the roles of educational institutions have become changed. Since higher education institutions have to play their pivotal role in disseminating knowledge-based economy and preparing skilled or semi-skilled individuals in different fields, therefore their continuous capacity building and strengthening should be given top priority.
                </p>
            </div>
        <img className="linkdn" src={director2} alt=""/>
    </div>
    <div className="section">
        <img src={director3} alt=""/>
        <div className="text">
            <h1>Sir Shayan</h1>
            <p>We also believe that the environment of a school or collegiate should be an extension of the family, providing a safe environment in which students can learning safely, challenge themselves intellectually, and explore new ideas rigourously.
                This foundation of our educational and social philosophy supports us in providing opportunities for learning that enable our students to become the very best that they can be. We do this by being professional and we do this by caring about our profession. In this way, study with professional educational System adds significant value in the lives of our students.
                </p>
        </div>        
    </div>
    <Footer/>
    </>
  );
};

export default Director;
