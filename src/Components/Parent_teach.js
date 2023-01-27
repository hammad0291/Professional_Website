import React from 'react'
import Apply_online from './Apply_online'
import Footer from './Footer'
import Navbar from './Navbar'
import Sticky_Container from './Sticky_Container'
import Whatsapp_button from './Whatsapp_button'

export default function Parent_teach() {
  return (
    <>
    <Navbar/>
    <Sticky_Container/>
    <Apply_online/>
    <div className="bg">
        <div className="ptm_log-1">
            <p>Parent Teacher Engagement</p>
        </div>
    </div>
        <div className="meeting">
            <h1>PARENT'S TEACHER MEETING (PTM)</h1>
            <p>Parent Teacher Meeting (PTM) plays a crucial role in enhancing a child’s education. Often dreaded by
                children, parent teacher meeting is an effective way for parents and teachers to interact and discuss
                about
                their child’s progress. Parents on the other hand can play an active role in their child’s education and
                can
                further encourage and influence their child to do well in school.</p>
            <p>Parent teacher association works as a bridge between parents and teachers where through mutual
                cooperation
                both can decide what further steps should be taken so that a child can get most out of his/her studies.
                Since schools are not only meant to teach certain subjects, they also work on improving different set of
                skills and social and emotional aspects of a child. Parents should discuss these points so that a
                teacher
                can help in improving the same. Parents should also try to communicate with their children about their
                experiences at school, what they like, what they find difficult, as much as they can. This helps parents
                to
                become aware about the opinions of their child and the feedback of the teacher. At PTMs parents also get
                a
                chance to interact with parents and teachers from other students and can exchange their experience of
                parenting. Parent teacher meeting helps parents about the activities and academic progress of the child
                evaluated through regular assessments, assignments and observation. On the other hand, it also helps
                parents
                to properly communicate and coordinate with the teacher about participation of the child in className and in
                different activities</p>
            <p>Parent teacher meetings are not only meant for highlighting the problems related to academics and
                activities
                but also serves as a platform for appreciation. Pointing negative aspects in a child can sometimes make
                them
                feel discouraged. Since every child is unique in his or her own way, so children too feel motivated when
                they receive praise from their teachers and they try to work more efficiently. A positive interaction
                between teachers and parents leaves a positive impact on the child who further looks forward to come to
                school. There are certain hidden talents a child develops in school through active participation in
                different activities, communicating with others and working in a group. So parents are also informed
                about
                their child’s qualities by the teachers in the meeting.</p>
            <p>Parent teacher meeting is an effective way through which parents can discuss several issues that they
                feel
                are hindering their child’s learning. Face to face communication with the teacher immensely helps the
                parents to plan out the learning process of their child. On the other hand, teachers also get the chance
                to
                know more about overall personalities, likes, dislikes, strength and weaknesses of their students, which
                is
                only possible through parent teacher meeting. Parents can well inform the teachers about their children.
                On
                the basis of the information provided by the parents, teachers too can make several modifications and
                devise
                new ways to make students understand and learn more effectively. Since there are plenty of reasons (some
                of
                which are summarized above) how parent teacher meetings play an important role, it should be kept at
                first
                priority by the parents when it comes to their child’s education.</p>
            <p>At our institutions we make sure that PTMs are duly arranged after each exam however frequent meetings
                are
                also encouraged to keep a regular check on student’s progress. We also request parents to join these
                meetings with priority.
            </p>
        </div>
        <Footer/>
        <Whatsapp_button/>
    </>
  )
}
