import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { aboutSection } from '../Reducers/route'
import './Personal.css'

const Personal = () => {

  const [screenAnimate, setScreenAnimate] = useState()
  const [branding, setBranding] = useState()
  const [slideIn, setSlideIn] = useState()
  const [slideIn2, setSlideIn2] = useState()
  const [nextBtn, setNextBtn] = useState()
  const [myIntroduction_page1, setMyIntroduction_page1] = useState()
  const [myIntroduction_page2, setMyIntroduction_page2] = useState()
  const [myIntroduction_page3, setMyIntroduction_page3] = useState()
  const [myIntroduction_page4, setMyIntroduction_page4] = useState()
  const dispatch = useDispatch()
  const value = useSelector(state => state.router.value)
    useEffect(()=>{
      if(value === '-75%'){
        setScreenAnimate({animationName:'screenAnimate,screenAnimateReverse'})
        setBranding({animationName:'branding'})
        setSlideIn({animationName:'slideIn'})
        setSlideIn2({animationName:'slideIn2'})
        setNextBtn({animationName:'nextBtn'})
      }
    },[value])

    const nextPageFunc = () =>{
      // setSlideIn({right:'100%'})
      // setSlideIn2({right:'100%'})
      setMyIntroduction_page1({right:'100%'})
      setMyIntroduction_page2({left:'0'})

      setTimeout(()=>{
      setSlideIn({display:'none'})
      setSlideIn2({display:'none'})
      },1000)
    }

    const topage3 =() =>{
      setMyIntroduction_page2({right:'100%'})
      setMyIntroduction_page3({left:'0'})
    }
    const toContactPage =() =>{
      setMyIntroduction_page3({right:'100%'})
      setMyIntroduction_page4({left:'0'})
    }


  return (
    <div className='Personal'>
        <div className="backBtn" onClick={()=>dispatch(aboutSection('-50%'))}>Back</div>
          {/* small display/screen */}
          <div className="frontScreen">

            {/* Branding */}
            <div className="PersonalIntro" style={branding}>
              <img src="img/JP-Logo.png" alt="" />
              <p>Jayant Papola</p>
            </div>

              {/* Color Animation */}
            <div className="screen redScreen" style={screenAnimate}><img src="img/emoji1.png" alt="" /></div>
            <div className="screen orangeScreen" style={screenAnimate}><img src="img/emoji2.png" alt="" /></div>
            <div className="screen yellowScreen" style={screenAnimate}><img src="img/emoji3.png" alt="" /></div>
            <div className="screen greenScreen" style={screenAnimate}><img src="img/emoji4.png" alt="" /></div>
            <div className="screen blueScreen" style={screenAnimate}><img src="img/emoji5.png" alt="" /></div>
            <div className="screen purpleScreen" style={screenAnimate}><img src="img/emoji6.png" alt="" /></div>

              {/* Introduction */}
            <div className="myIntroduction">
             

             {/* Page1 */}
              <div className="myIntroduction_page1" style={myIntroduction_page1}>
                   <div className="myIntroduction_nextBtn" style={nextBtn} onClick={nextPageFunc}><i class="fa-solid fa-angle-right"></i></div>
                  <div className="myIntroSections myIntroduction_sec1" style={slideIn}>
                    <p>Pass Out in  2020 from Kendriya Vidiyalaya JNU.(Commerce Student)</p>
                    <img src="img/School.png" alt="" />
                  </div>

                  <div className="myIntroSections myIntroduction_sec2" style={slideIn2}>
                    <img src="img/institute.png" alt="" />
                    <p>Started Graphic Design And Web Design Course 
                      from Hitech Animation Delhi in Lajpat Nagar.
                    </p>
                  </div>

              </div>

              {/* Page2 */}
              <div className="myIntroduction_page2" style={myIntroduction_page2}>

                <div className="myIntroduction_nextBtn" style={nextBtn} onClick={topage3}><i class="fa-solid fa-angle-right"></i></div>
                  <div className="myIntroSections myIntroduction_sec3">
                    <p> <span>How i learned React </span><br /><br />
                      I selftaught ReactJs through Internet, official websites,
                      Mostly from Youtube and directly jumped into making projects and 
                      lots of  projects and that's my way to  learn code.
                    </p>
                    <img src="img/watch_me.gif" alt="" />
                </div>
                
              </div>

              {/* Page3 */}
              <div className="myIntroduction_page3" style={myIntroduction_page3}>

                <div className="myIntroduction_nextBtn" style={nextBtn} onClick={toContactPage}><i class="fa-solid fa-angle-right"></i></div>
                  <div className="myIntroSections myIntroduction_sec4">
                    <p> <span>About My MERN Knowledge </span><br /><br />
                      I am not so excellent in backend developing yet but i know
                      almost all the  basic functions of a backend developing. I also 
                      made a Chatting App Project with all self created logics. <br /><br />
                      I stepped into MERN stack just because i had curosity that how
                      frontend and backend developer work together and also to know to role
                      of a frontend developer.
                      <br /><br />
                      :)Currently Focusing on frontend(:
                    </p>
                    <img src="img/mern.gif" alt="" />
                </div>
                
              </div>
              {/* Page4 */}
              <div className="myIntroduction_page4" style={myIntroduction_page4}>

                {/* <div className="myIntroduction_nextBtn" style={nextBtn}><i class="fa-solid fa-angle-right"></i></div> */}
                  <div className="myIntroSections myIntroduction_sec5">
                    <img src="img/Contact_me.gif" alt="" />
                    <div className="social_icons">
                      <a href="https://www.instagram.com/jayantpapola/" target='_blank'>
                        <img src="img/Social1.png" alt="" />
                      </a>
                      <a href="https://www.linkedin.com/in/jayant-papola-803895187/" target='_blank'>
                        <img src="img/Social3.png" alt="" />
                      </a>
                      <a href="https://web.whatsapp.com/" target='_blank'>
                        <img src="img/Social2.png" alt="" />
                      </a>
                    </div>
                    <p>Whatsapp/phone : 9810291401</p>
                    <p>email : jpapola21@gmail.com</p>
                </div>
                
              </div>
              
              
            </div>
          </div>
          
    </div>
  )
}

export default Personal