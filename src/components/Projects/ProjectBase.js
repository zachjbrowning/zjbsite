import React from 'react'
import parse from "../../../lib/parser";


export default function ProjectBase(props) {
    
    return (
        <div className="constrict container proj-box">
            <div className="proj proj-name">
                {props.name} - {props.info["date"]}
            </div>
            <div className="proj">
                <span className="proj-subtitle">Overview<br/></span>
                {parse(props.info['overview'])}
            </div>
            <div className="proj">
                <span className="proj-subtitle">Learning outcomes<br/></span>
                <ul>
                    {props.info['learning-outcomes'].map((out, index) => <li key={index}>{parse(out)}</li>)}
                </ul>
            </div>
            {props.extra}
            <div className="proj">
                <span className="proj-subtitle">Notes<br/></span>
                <ul>
                    {props.info['notes'].map((out, index) => <li key={index}>{parse(out)}</li>)}
                </ul>
            </div>
        </div>
    )
}



