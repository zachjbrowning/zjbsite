import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class MainProjects extends Component {
    render() {
        return (
            <div className="constrict welcome projects-title">
                a few of my&nbsp;<Link to="/projects" className="inverse-flave linkage">projects</Link>...
            </div>
        )
    }
}
