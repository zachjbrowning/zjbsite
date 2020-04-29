import React, {Component} from 'react'
import MainWelcomeArrow from './MainWelcomeArrow'

class MainWelcome extends Component {
    render() {
        return (
            <div className="constrict welcome-box">
                <div id="welcome-more">
                    Scroll to see some of the site... FIX ARROW
                </div>
                <MainWelcomeArrow/>
                <div className="welcome">
                    Welcome<span className="inverse-flave">.</span><br/> This website is about me,  <span className="flave"><br/>Zach Browning</span>.<br/> I made it because I discovered I like building websites! Enjoy.
                </div>
            </div>
        )
    }
}


export default MainWelcome