import React, {useState, useEffect} from 'react'
import H0 from './HistoSVGS/H0'
import H1 from './HistoSVGS/H1'
import H2 from './HistoSVGS/H2'
import H3 from './HistoSVGS/H3'
import H4 from './HistoSVGS/H4'
import H5 from './HistoSVGS/H5'







export default function MainHisto() {
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
        <div className="histo-holder">
            <div id="histo-parallax">
                <H0 id="H0"/>
            </div>
            <div id="histo-parallax">
                <H1 id="H1"/>
            </div>
            <div id="histo-parallax">
                <H2 id="H2"/>
            </div>
            <div id="histo-parallax">
                <H3 id="H3"/>
            </div>
            <div id="histo-parallax">
                <H4 id="H4"/>
            </div>
            <div id="histo-parallax">
                <H5 id="H5"/>
            </div>
            <div id="histo-mask">
                <a id="histo-mask-shadow" href="/oldsite"></a>
            </div>
            
            <div className="histo-title welcome">
                history...
            </div>
            <div className="histo-untitle">
                (<a className="inverse-flave linkage" href="/oldsite">version 1.0</a> of the site was a lot different!)
            </div>
        </div>
    )
}
