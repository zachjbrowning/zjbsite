import React, {Component} from 'react'
import Nav from './Nav/Nav'
import {Route} from 'react-router-dom'
import ContactHome from './Contact/ContactHome'
import ProjectHome from './Projects/ProjectHome'
import MainHome from './Main/MainHome'

class Main extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div class="main-holder">
                    <Route exact path="/" render={() => (
                        <MainHome/>
                    )}/>
                    <Route path="/contact" render={() => (
                        <div class="constrict main-frame">
                            <ContactHome/>
                        </div>
                    )}/>
                    <Route path="/projects" render={() => (
                        <div class="constrict main-frame">
                            <ProjectHome/>
                        </div>
                    )}/>
                </div>
            </div>
        )
    }

}


export default Main