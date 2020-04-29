import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import '../../css/nav.css';
import NavItem from './Navitem'

class Nav extends Component {
    componentDidMount() {
        document.body.addEventListener('scroll', this.shadowScroll)
    }
    
    shadowScroll() {
        if (document.body.scrollTop > 60) {
            document.getElementById('navholder').classList.add('shadow')
        } else {
            document.getElementById('navholder').classList.remove('shadow')
        }
    }

    render() {
        return (
            <div id="navholder" className="nav-holder">
                <nav className="navbar navbar-expand-sm navbar-light constrict">
                    <Link className="mr-auto navbar-brand" to="/">
                        <div className="logo-brand-holder d-inline-block align-bottom">
                            <Logo/>
                        </div>{' '}
                        <span className="name-brand">ZJB</span>
                    </Link> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navo" aria-controls="navo" aria-expanded="false" aria-label="Toggle navigation">
                        <svg width='30' height='30' viewBox='0 0 30 30'><path className="burger-tint" strokeMiterlimit='10' strokeWidth='2' d='M4 7h22M4 15h22M4 23h22'/></svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navo">
                        <ul className="navbar-nav ml-auto">
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