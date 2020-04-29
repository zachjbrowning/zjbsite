import React, { Component } from 'react'
import logo from './trial.png'
export default class MainHistory extends Component {
    render() {
        return (
            <div className="histo-holder">
                <div id="histo-parallax">
                    <img alt="trial" id="trial" src={logo}/>
                </div>
                <div id="histo-mask">
                </div>
            </div>
        )
    }
}
