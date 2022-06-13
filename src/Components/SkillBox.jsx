import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { backToSkillBoxx } from '../Reducers/backToSkillBox'
import { aboutSection } from '../Reducers/route'
import Personal from './Personal'
import Projects from './Projects'
import './SkillBox.css'

const SkillBox = ({delay}) => {

	const [animationDelay, setAnimationDelay] = useState()
	const [projects, setProjects] = useState()

	const dispatch = useDispatch()

	 const val = useSelector(state => state.backToSkillBoxx.value)

  useEffect(()=>{
    if(delay==='-50%'){
        setAnimationDelay({
        display:'flex'
      })
    
    }
  },[delay])

  const showProjects = () =>{
	  setProjects({
		  transform:'translateY(-100vh)'
	  })
  }

  useEffect(()=>{
	setProjects({
		  transform:'translateY(0vh)'
	  })
	  
  console.log(val);
  },[val])

  return (
    <div className='SkillBox' style={projects}>
      <div class="SKILL scroll_section" style={animationDelay}>
			{/* Back To About Me Button */}
			{/* <div className="backToAboutMeBtn" onClick={()=>dispatch(aboutSection('-25%'))}>Back</div> */}

			<div class="col-md-12 persp ">
				<div class="skill_cube" id="cube">
					<div class="front">Jayant <br /> Papola
						{/* <p class="Tap">Tap to Open</p> */}
					</div>
					<div class="back"></div>
					<div class="left"></div>
					<div class="right"></div>
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
				<div class="shadow">
					<div class="dark"></div>
				</div>
        		<div class="more_AboutMe"><img onClick={()=>dispatch(aboutSection('-75%'))}  src="img/Avatar.png" alt='asd'/></div>
        		<div class="myProjects" ><img onClick={showProjects}  src="img/Projects.png" alt='asd'/></div>
			</div>
		</div>
		<Projects/>
    </div>
  )
}

export default SkillBox