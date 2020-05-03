import React, {useState, useEffect} from 'react'
import MainWelcome from './MainWelcome'
import MainAnimate from './MainAnimate'
import MainLogo from './MainLogo'
import MainHisto from './MainHisto'
import MainProjects from './MainProjects'
import MainResume from './MainResume'
import MainEnd from './MainEnd'

export default function MainHome() {
    const [scroll, setScroll] = useState(document.body.scrollTop)
    
    useEffect(() => {
        document.body.scrollTo(0,0)
        document.getElementById("navo").classList.remove('show')
        document.body.addEventListener("scroll", () => {
            if (window.location.pathname === '/') {
                const animeDiff = scroll - document.getElementById("animeFrame").getBoundingClientRect().top
                const histoDiff = scroll - document.getElementById("histoFrame").getBoundingClientRect().top
                const sine = Math.sin(Math.PI / 18)
                setScroll(document.body.scrollTop)
                let newchange = animeDiff - scroll
                document.getElementById("animeDown").style.transform = "translate(" + newchange + "px," + (-newchange * sine) + "px) rotate(-10deg)"
                document.getElementById("animeUp").style.transform = "translate(" + (-newchange) + "px," + (newchange * sine) + "px) rotate(-10deg)"
                let newlength = histoDiff - scroll
                document.getElementById("H0").style.transform = "translateY(" + (-newlength/20) + "px)" 
                document.getElementById("H1").style.transform = "translateY(" + (-newlength/18) + "px)" 
                document.getElementById("H2").style.transform = "translateY(" + (-newlength/12) + "px)" 
                document.getElementById("H3").style.transform = "translateY(" + (-newlength/7) + "px)" 
                document.getElementById("H4").style.transform = "translateY(" + (-newlength/6) + "px)" 
                document.getElementById("H5").style.transform = "translateY(" + (-newlength/5) + "px)"
                document.getElementById("kite").style.transform = "rotate(" + newlength / 5 + "deg)";
            }
        })
    }, [])
    return (
        <div id="Main">
            <div className="main-frame welcome-frame">
                <MainWelcome/>
            </div>
            <div id="animeFrame" className="main-frame anime-frame">
                <MainAnimate/>  
            </div>
            <div id="resumeFrame" className="main-frame">
                <MainResume/>
            </div>
            <div id="histoFrame" className="main-frame">
                <MainHisto/>
            </div>
            <div className="main-frame">
                <MainProjects/>
            </div>    
            <div id="logoFrame" className="main-frame">
                <MainLogo/>
            </div>
            <div className="main-frame">
                <MainEnd/>
            </div>
        </div>
    )
}
