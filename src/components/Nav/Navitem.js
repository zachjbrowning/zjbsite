import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={this.props.addr}>{this.props.name}</Link>
            </li>
        )
    }
}

export default NavItem
