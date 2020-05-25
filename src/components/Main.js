import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from './Loader'
import Nav from './Nav/Nav'
import '../css/general.css'

const AsyncWelcome = Loadable({
    loader: () => import('./Main/MainHome'),
    loading() {
        return <Loader/>
    }
})
const AsyncProjects = Loadable({
    loader: () => import('./Projects/ProjectHome'),
    loading() {
        return <Loader/>
    }
})
const AsyncContact = Loadable({
    loader: () => import('./Contact/ContactHome'),
    loading() {
        return <Loader/>
    }
})

class Main extends Component {

    render() {
        return (
            <div>
                <div id="mainholder" className="main-holder">
                    <Route exact path="/" component={AsyncWelcome}/>
                    <Route path="/contact" component={AsyncContact}/>
                    <Route path="/projects" component={AsyncProjects}/>
                </div>
                <Nav/>
            </div>
        )
    }

}


export default Main