import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
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

const AsyncHB = Loadable({
    loader: () => import('./HB/HBSam'),
    loading() {
        return <></>
    }
})

class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/hb-spam" component={AsyncHB} />
                <Route>
                    <div>
                        <div id="mainholder" className="main-holder">
                            <Route exact path="/" component={AsyncWelcome}/>
                            <Route path="/contact" component={AsyncContact}/>
                            <Route path="/projects" component={AsyncProjects}/>
                        </div>
                        <Nav/>
                    </div>
                </Route>
            </Switch>
        )
    }

}


export default Main