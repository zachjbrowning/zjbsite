import React, {Component} from 'react'
import ProjectBase from './ProjectBase'
import {Link} from 'react-router-dom'

class ProjectHome extends Component {
    constructor() {
        super()
        this.state = {
            projs: require('./projects.json')
        }
    }
    componentDidMount() {
        document.body.scrollTo(0,0);
        document.getElementById("navo").classList.remove('show');
    }
    render() {
        let alternate = true;
        return (
            <div>
                <div className="main-frame">
                    <div className="constrict proj-box">
                        <div className="proj-header">
                            Here's a couple of my projects! Scroll or click on the links to see more.<br/><br/>
                            <div className="proj-list">
                                {this.state.projs.map((dict) => <div key={dict["name"]} className="proj-list">
                                    <Link className="proj-headlink flave linkage"  onClick={() => {window.location.href="#" + dict["name"]}} to={"/projects/#" + dict["name"]}>     
                                        {dict["name"]}
                                    </Link>
                                    <br/>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            
                {this.state.projs.map((dict) => <div 
                    key={dict["name"]} id={dict["name"]} className={"main-frame " + (alternate ? 'alternate' : '')}>
                        <ProjectBase name={dict["name"]} info={dict["info"]}/>
                        {alternate = !alternate}
                    </div>)}
           </div>
            
        )
    }
}

export default ProjectHome