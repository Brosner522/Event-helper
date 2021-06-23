import React, { Component } from "react";

export default class NavBar extends Component {

    render() {
        return(
            <div className="navbar">
                <h1>App Name</h1>
                <button className="navbar-btn" onClick={() => this.props.handleHome(this.props)}>Home</button>
                
                <button className="navbar-btn">Create new event if user is logged in</button>
                
            


            </div>
        )
    }
}