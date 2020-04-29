import React, {Component} from 'react'
import '../../css/main.css'
import MainWelcome from './MainWelcome'
import MainAnimate from './MainAnimate'
import MainLogo from './MainLogo'
import MainHistory from './MainHistory'

class MainHome extends Component {
    render() {
        return (
            <div>
                <div className="main-frame welcome-frame">
                    <MainWelcome/>
                </div>
                <div id="animeFrame" className="main-frame anime-frame">
                    <MainAnimate/>  
                </div>
                <div className="main-frame">
                    <MainLogo/>
                </div>
                <div className="main-frame">
                    <MainHistory/>
                </div>  
            </div>
        )
    }
}


export default MainHome