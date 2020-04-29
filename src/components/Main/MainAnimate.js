import React, {useState, useEffect} from 'react'

const MainAnimate = () => {
    const [scroll, setScroll] = useState(document.body.scrollTop)
    useEffect(() => {
        const diff = scroll - document.getElementById("animeFrame").getBoundingClientRect().top
        document.body.addEventListener("scroll", () => {
            setScroll(document.body.scrollTop) 
            let newlength = diff - scroll
            document.getElementById("animeDown").style.transform = "translateX(" + newlength + "px)" 
            document.getElementById("animeUp").style.transform = "translateX(" + (-newlength) + "px)" 
        })
    })
    return (
        <div className="constrict anime-box">
            <div id="animeUp" className="anime-up">
                This website has really
            </div>
            <div id="animeDown" className="anime-down">
                cool animations...
            </div>
        </div>
    )
}


export default MainAnimate