import React from 'react'
import Logo from '../Nav/Logo'

const MainLogo = () => {
    return (
        <div className="constrict logo-holder">
            <div className="main-logo-title welcome">
                trippy logos...
            </div>
            <div id="kite" className="logo-box rotate-down">
                <Logo/>
            </div>
        </div>
    )
}




export default MainLogo