import React from 'react'
import { useSelector } from 'react-redux'
import AboutMe from './AboutMe'
import Intro from './Intro'
import Personal from './Personal'
import './PortFolio.css'
import SkillBox from './SkillBox'

const PortFolio = () => {

  const value = useSelector(state => state.router.value)
  console.log(value);


  return (
    <div className='PortFolio' style={{transform:`translateX(${value})`}}>

      
    {/* INTRO */}
        <Intro/>

    {/* ABOUT ME */}
        <AboutMe delay={value}/>

    {/* SKILL BOX */}
        <SkillBox delay={value}/>

    {/* More About Me */}
        <Personal delay={value}/>
    </div>
  )
}

export default PortFolio