import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavItem extends Component {
    render() {
        return (
            <li class="nav-item">
                <Link class="nav-link" to={this.props.addr}>{this.props.name}</Link>
            </li>
        )
    }
}

export default NavItem
