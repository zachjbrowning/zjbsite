import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import '../../css/nav.css';
import NavItem from './Navitem'

class Nav extends Component {
    render() {
        return (
            <div class="nav-holder">
                <nav class="navbar navbar-expand-sm navbar-light constrict">
                    <Link class="mr-auto navbar-brand" to="/">
                        <div class="logo-brand-holder d-inline-block align-bottom">
                            <Logo/>
                        </div>{' '}
                        <span class="name-brand">ZJB</span>
                    </Link> 
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navo" aria-controls="navo" aria-expanded="false" aria-label="Toggle navigation">
                        <svg width='30' height='30' viewBox='0 0 30 30'><path className="burger-tint" stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>
                    </button>
                    <div class="collapse navbar-collapse" id="navo">
                        <ul class="navbar-nav ml-auto">
                            <NavItem name="Projects" addr="projects"/>
                            <NavItem name="Contact" addr="contact"/>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Nav