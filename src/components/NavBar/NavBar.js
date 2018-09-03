import React, { Component } from 'react'

import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-container">
                    <li><a href="/">Home</a></li>
                    <li ><a href="/">History</a></li>
                    <li ><a href="/">Log out</a></li>
                </ul>
            </div>
        )
    }
}
