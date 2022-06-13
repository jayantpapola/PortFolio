import React from 'react'
import './Intro.css'
import { useDispatch } from 'react-redux'
import { aboutSection } from '../Reducers/route'

const Intro = () => {

  const dispatch = useDispatch()
  
  return (
    <div className='Intro'>
        {/* Typing Animation */}
        <div className="intro">
			<h1 id="myName">Hello, My Name Is Jayant.</h1>
			<p>Welcome to my website.</p>
		</div>

    {/* Get Started Button */}
        <div className="Start" onClick={()=>dispatch(aboutSection('-25%'))}>
            <p>Get Started</p>
            <div className=" triangle start_upper_triangle"></div>
            <div className="triangle start_lower_triangle"></div>
        </div>

    {/* Get Started PopUp Glow */}
        <div className="popUpGlow"> </div>
    </div>
  )
}

export default Intro