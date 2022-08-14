import React, { useEffect, useState } from 'react'
import { skillBoxSection } from '../Reducers/backToSkillBox'
import { useDispatch } from 'react-redux'
import './Projects.css'

const Projects = () => {

    const [image, setImage] = useState()
    const [count, setCount] = useState(0)
    const [image2, setImage2] = useState()
    const [count2, setCount2] = useState(0)
    const [image3, setImage3] = useState()
    const [count3, setCount3] = useState(0)
    const [image4, setImage4] = useState()
    const [count4, setCount4] = useState(0)
    const [image5, setImage5] = useState()
    const [count5, setCount5] = useState(0)


    // Project 1 autoplay function
    function autoplay(){
        if(count === 1){
            setImage({
                transform : 'translateX(-500px)'
            })}
        else if(count === 2){
            setImage({
                transform : 'translateX(-1000px)'
            })
        }
        else if(count === 3){
            setCount(0)
            setImage({
                transform : 'translateX(0px)'
            })
        }
        else if(count === 0){
            setImage({
                transform : 'translateX(0px)'
            })
        }
        else{
            setCount(0)
        }
    }
    


    // Project 2 autoplay function
    function autoplay2(){
        if(count2 === 1){
            setImage2({
                transform : 'translateX(-500px)'
            })}
        else if(count2 === 2){
            setImage2({
                transform : 'translateX(-1000px)'
            })
        }
        else if(count2 === 3){
            setImage2({
                transform : 'translateX(-1500px)'
            })
        }
        else if(count2 === 4){
            setCount2(0)
            setImage2({
                transform : 'translateX(0px)'
            })
        }
        else if(count2 === 0){
            setImage2({
                transform : 'translateX(0px)'
            })
        }
        else{
            setCount2(0)
        }
    }
    // Project 3 autoplay function
    function autoplay3(){
        if(count3 === 1){
            setImage3({
                transform : 'translateX(-500px)'
            })}
        else if(count3 === 2){
            setImage3({
                transform : 'translateX(-1000px)'
            })
        }
        else if(count3 === 3){
            setImage3({
                transform : 'translateX(-1500px)'
            })
        }
        else if(count3 === 4){
            setCount3(0)
            setImage3({
                transform : 'translateX(0px)'
            })
        }
        else if(count3 === 0){
            setImage3({
                transform : 'translateX(0px)'
            })
        }
        else{
            setCount3(0)
        }
    }
    // Project 4 autoplay function
    function autoplay4(){
        if(count4 === 1){
            setImage4({
                transform : 'translateX(-500px)'
            })}
        else if(count4 === 2){
            setImage4({
                transform : 'translateX(-1000px)'
            })
        }
        else if(count4 === 3){
            setImage4({
                transform : 'translateX(-1500px)'
            })
        }
        else if(count4 === 4){
            setCount4(0)
            setImage4({
                transform : 'translateX(0px)'
            })
        }
        else if(count4 === 0){
            setImage4({
                transform : 'translateX(0px)'
            })
        }
        else{
            setCount4(0)
        }
    }
    // Project 5 autoplay function
    function autoplay5(){
        if(count5 === 1){
            setImage5({
                transform : 'translateX(-500px)'
            })}
        else if(count5 === 2){
            setImage5({
                transform : 'translateX(-1000px)'
            })
        }
        else if(count5 === 3){
            setImage5({
                transform : 'translateX(-1500px)'
            })
        }
        else if(count5 === 4){
            setImage5({
                transform : 'translateX(-2000px)'
            })
        }
        else if(count5 === 5){
            setCount5(0)
            setImage5({
                transform : 'translateX(0px)'
            })
        }
        else if(count5 === 0){
            setImage5({
                transform : 'translateX(0px)'
            })
        }
        else{
            setCount5(0)
        }
    }
    useEffect(()=>{
        autoplay()
    },[count])
    useEffect(()=>{
        autoplay2()
    },[count2])
    useEffect(()=>{
        autoplay3()
    },[count3])
    useEffect(()=>{
        autoplay4()
    },[count4])
    useEffect(()=>{
        autoplay5()
    },[count5])
    
    const [projectInfo,setProjectInfo] = useState({})
    const showProjectInfo = ()=>{
        setProjectInfo({top:'0'})
    }
    const [projectInfo2,setProjectInfo2] = useState({})
    const showProjectInfo2 = ()=>{
        setProjectInfo2({top:'0'})
    }
    const [projectInfo3,setProjectInfo3] = useState({})
    const showProjectInfo3 = ()=>{
        setProjectInfo3({top:'0'})
    }
    const [projectInfo4,setProjectInfo4] = useState({})
    const showProjectInfo4 = ()=>{
        setProjectInfo4({top:'0'})
    }
    const [projectInfo5,setProjectInfo5] = useState({})
    const showProjectInfo5 = ()=>{
        setProjectInfo5({top:'0'})
    }
    
    const dispatch = useDispatch()

  return (
    <div className='Projects'>
        <p className='info_tutorial'>Click Image for more Info</p>
        <div className="backToSkillBox" onClick={()=>dispatch(skillBoxSection(1))}>Back</div>
        <h1>HTML-CSS-Javascript</h1>
        <div className="project__row">
            <div className="project project4">
                <div className="projectInfo" style={projectInfo} onClick={()=>setProjectInfo({top:'100%'})}>
                    <h2>Freelance Website</h2>
                    <p>Fully Responsive Matrimonial Webiste made on html,css,Javascript for a freelance project.
                        Used Formspree for sending form details to email  
                    </p>
                    <div className="getProjectLink"><a href="Exclusive-Matrimonial/main.html" target='_blank'>Get Link</a></div>
                </div>
                <div className="prevBtn" onClick={()=>setCount3(count3-1)}><i class="fa-solid fa-angle-left"></i></div>
                <div className="nextBtn"  onClick={()=>setCount3(count3+1)}><i class="fa-solid fa-angle-right"></i></div>
                <img  style={image3} src="img/Project-4(1).png" alt="" onClick={showProjectInfo}/>
                <img style={image3} src="img/Project-4(2).png" alt="" onClick={showProjectInfo}/>
                <img style={image3} src="img/Project-4(3).png" alt="" onClick={showProjectInfo}/>
                <img style={image3} src="img/Project-4(4).png" alt=""  onClick={showProjectInfo}/>
            </div>
            <div className="project project5">
                <div className="projectInfo" style={projectInfo2} onClick={()=>setProjectInfo2({top:'100%'})}>
                    <h2>Basic Website</h2>
                    <p>Used bootstrap, owl carousel, html, css</p>
                    <div className="getProjectLink"><a href="Jayant-Project_2/main.html" target='_blank'>Get Link</a></div>
                </div>
                <div className="prevBtn" onClick={()=>setCount4(count4-1)}><i class="fa-solid fa-angle-left"></i></div>
                <div className="nextBtn"  onClick={()=>setCount4(count4+1)}><i class="fa-solid fa-angle-right"></i></div>
                <img style={image4}  src="img/Project-5(1).png" alt="" onClick={showProjectInfo2}/>
                <img style={image4}  src="img/Project-5(2).png" alt="" onClick={showProjectInfo2}/>
                <img style={image4}  src="img/Project-5(3).png" alt="" onClick={showProjectInfo2}/>
                <img style={image4}  src="img/Project-5(4).png" alt="" onClick={showProjectInfo2}/>
            </div>
        </div>

        <h1>ReactJs (frontend)</h1>
        <div className="project__row">
            <div className="project project1">
                <div className="projectInfo" style={projectInfo3} onClick={()=>setProjectInfo3({top:'100%'})}>
                    <h2>Amazone Clone</h2>
                    <p>My first React Website (made for learning purpose only)<br /><br />
                        - add to cart functionality <br />
                        - remove products from cart functionality <br />
                        - used REDUX, Context API and react hooks <br/>
                        - created own products array
                    </p>
                    <div className="getProjectLink">
                        <a href="https://github.com/jayantpapola/Reactjs-Project" target='_blank'>Get Link</a> 
                    </div>
                </div>
                <div className="prevBtn" onClick={()=>setCount(count-1)}><i class="fa-solid fa-angle-left"></i></div>
                <div className="nextBtn"  onClick={()=>setCount(count+1)}><i class="fa-solid fa-angle-right"></i></div>
                
                <img style={image} src="img/Project-1(1).png" alt="" onClick={showProjectInfo3}/>
                <img style={image} src="img/Project-1(2).png" alt="" onClick={showProjectInfo3}/>
                <img style={image} src="img/Project-1(3).png" alt="" onClick={showProjectInfo3}/>
            </div>
            <div className="project project2">
                <div className="projectInfo" style={projectInfo4} onClick={()=>setProjectInfo4({top:'100%'})}>
                    <h2>Netflix Clone</h2>
                    <p>My 2nd React Website <br /><br />
                        - used TMDB movies API<br />
                        - used REDUX and react hooks <br />
                        - linked with react-Youtube for movies trailer 
                    </p>
                    <div className="getProjectLink">
                        <a href="https://github.com/jayantpapola/Netflix-Clone" target='_blank'>Get Link</a> 
                    </div>
                </div>
                <div className="prevBtn" onClick={()=>setCount2(count2-1)}><i class="fa-solid fa-angle-left"></i></div>
                <div className="nextBtn"  onClick={()=>setCount2(count2+1)}><i class="fa-solid fa-angle-right"></i></div>
                <img style={image2}  src="img/Project-2.png" alt="" onClick={showProjectInfo4}/>
                <img style={image2}  src="img/Project-2(1).png" alt="" onClick={showProjectInfo4}/>
                <img style={image2}  src="img/Project-2(2).png" alt="" onClick={showProjectInfo4}/>
                <img style={image2}  src="img/Project-2(3).png" alt="" onClick={showProjectInfo4}/>
            </div>
        </div>
       
        <h1>MERN-Stack</h1>
       <div className="project__row">
            <div className="project project3">
                <div className="projectInfo" style={projectInfo5} onClick={()=>setProjectInfo5({top:'100%'})}>
                    <h2>Messaging Website</h2>
                    <p>Used MERN Tech Stack (MongoDB,ExpressJs,ReactJs,NodeJs)
                         <br /><br />
                        - authentication functionality<br />
                        - hashing password before saving in database (used Bcrypt for hashing password)<br />
                        - chatting, add reels functionality<br />
                        - edit friend name or delete friend<br /><br />
                        
                        <b>Note: </b>All backend logics(eg:sending message, receiving messages, adding reels, adding member, deleting member and etc.) are made self except authentication
                    </p>
                    <div className="getProjectLink">
                        <a href="https://drive.google.com/drive/folders/17sTffgNZdiyM4psqEriXynjA2W4zi84u?usp=sharing" target='_blank'>Get Link</a> 
                    </div>
                </div>
                <div className="prevBtn" onClick={()=>setCount5(count5-1)}><i class="fa-solid fa-angle-left"></i></div>
                <div className="nextBtn"  onClick={()=>setCount5(count5+1)}><i class="fa-solid fa-angle-right"></i></div>
                <img style={image5}  src="img/Project-3.png" alt="" onClick={showProjectInfo5}/>
                <img style={image5}  src="img/Project-3(1).png" alt="" onClick={showProjectInfo5}/>
                <img style={image5}  src="img/Project-3(2).png" alt="" onClick={showProjectInfo5}/>
                <img style={image5}  src="img/Project-3(3).png" alt="" onClick={showProjectInfo5}/>
                <img style={image5}  src="img/Project-3(4).png" alt="" onClick={showProjectInfo5}/>
            </div>
       </div>
        
    </div>
  )
}

export default Projects