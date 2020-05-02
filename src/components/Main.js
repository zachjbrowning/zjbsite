import React, {Component} from 'react'
import Nav from './Nav/Nav'
import {Route} from 'react-router-dom'
import ContactHome from './Contact/ContactHome'
import ProjectHome from './Projects/ProjectHome'
import MainHome from './Main/MainHome'

class Main extends Component {
    
    componentDidMount() {
        document.getElementById("loading-screen").style.display="none"
    }

    render() {
        return (
            <div>
                <div id="mainholder" className="main-holder">
                    <Route exact path="/" render={() => (
                        <MainHome/>
                    )}/>
                    <Route path="/contact" render={() => (
                        <div id="Contact" className="constrict main-frame">
                            <ContactHome/>
                        </div>
                    )}/>
                    <Route path="/projects" render={() => (
                        <div id="Projects" className="constrict main-frame">
                            <ProjectHome/>
                        </div>
                    )}/>
                </div>
                <Nav/>
            </div>
        )
    }

}


export default Main