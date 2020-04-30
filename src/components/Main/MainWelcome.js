import React, {Component} from 'react'

class MainWelcome extends Component {
    render() {
        return (
            <div className="constrict welcome-box">
                
                <div className="welcome">
                    Welcome<span className="inverse-flave">.</span><br/> This website is about me,  <span className="flave"><br/>Zach Browning</span>.<br/> I made it because I discovered I like building websites! Keep scrolling to see more...
                </div>
            </div>
        )
    }
}


export default MainWelcome