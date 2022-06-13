import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { aboutSection } from '../Reducers/route'
import './AboutMe.css'

const AboutMe = ({delay}) => {

  const [animationDelay, setAnimationDelay] = useState()

  const dispatch = useDispatch()

  useEffect(()=>{
    if(delay==='-25%'){
      setTimeout(()=>{
        setAnimationDelay({
        display:'block'
      })
      },1000)
    
    }
  },[delay])
  
  return (
    <div className='AboutMe'>
      <div className="aboutMe_Content">

      {/* Background Light */}
      

        {/* Section 1 */}
        <div className="aboutMe__sec1">
          <h1>About Me</h1>
          <p>My Fullname is <b>Jayant Papola</b>.<br/>
              I'm a Certified <span>Ui & Ux Designer</span><br/>
              and a <span>Front-End Developer</span> from<br/> Hitech Animation.
              I'm 20yrs old<br/>and live in Mehrauli, New Delhi.
          </p>
        </div>

        {/* Section 2 */}
        <div className="aboutMe__sec2">
          <h1>Education</h1>
          <p>Graphic Designing-(Diploma)</p>
          <p>  Web Designing-(Diploma)</p>
          <p> B.Com-Hons. (2nd Year)</p>
        </div>
          
        {/* Section 3 */}
        
        <div className="aboutMe__sec3">
          <h1>Skills :~:~:~:~:~:~:></h1>
          <div className="iconHider"></div>
          <div  style={animationDelay} className="icons photoshop"><img  src="img/photoshop.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons illustrator"><img src="img/illustrator.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons corel"><img src="img/CorelDraw.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons XD"><img src="img/Adobe_XD.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons html"><img src="img/HTML.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons css"><img src="img/CSS.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons js"><img src="img/Javascript.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons nodeJs"><img src="img/NodeJs.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons bootstrap"><img src="img/Bootstrap.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons Reactjs"><img src="img/reactJs.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons MongoDB"><img src="img/MongoDB.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons jquery"><img src="img/jquery.png" alt='icons'/></div>
					<div  style={animationDelay} className="icons Wordpress"><img src="img/Wordpress.png" alt='icons'/></div>
        </div>
      </div>
<div className="aboutMe__nextBtn" onClick={()=>dispatch(aboutSection('-50%'))}>Next</div>
    </div>
  )
}

export default AboutMe