import React from 'react'
import {Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import MainWelcome from './MainWelcome'
import MainAnimate from './MainAnimate'
import MainLogo from './MainLogo'
import MainProjects from './MainProjects'
import MainResume from './MainResume'
import MainEnd from './MainEnd'

const AsyncHisto = Loadable({
    loader: () => import('./MainHisto'),
    loading() {
        return <div>Loading old site...</div>
    }
})

export default function MainHome() {
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
                <Route exact path="/" component={AsyncHisto}/>
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
