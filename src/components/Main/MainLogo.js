import React, {useState, useEffect} from 'react'
import Logo from '../Nav/Logo'

const MainLogo = () => {
    const [scroll, setScroll] = useState(document.body.scrollTop)
    const [down, setDown] = useState(true)
    
    useEffect(() => {
        document.body.addEventListener("scroll", () => {
            const scrollChange = document.body.scrollTop - scroll
            if (scrollChange > 0 && !down) {
                setDown(true)
            } else if (scrollChange < 0 && down) {
                setDown(false)
            }
            setScroll(scroll + scrollChange)
            document.getElementById("kite").style.transform = "rotate(" + scroll / 5 + "deg)";
        })
    })

    return (
        <div className="constrict logo-holder">
            <div className="main-logo-title welcome">
                trippy logos...
            </div>
            <div id="kite" className={"logo-box" + (down ? ' rotate-down' : ' rotate-up')}>
                <Logo/>
            </div>
        </div>
    )
}




export default MainLogo