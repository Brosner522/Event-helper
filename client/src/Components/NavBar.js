import React, { Component } from "react";
import EventForm from "./EventForm";

export default class NavBar extends Component {
   state={
display: false
   }
    handleClick = () => {
        let newDisplay = !this.state.display;
        this.setState({
          display: newDisplay,
        });
      };    

  render() {
      
    return (
      <div className="navbar">
        <h1 onClick={() => this.props.handleHome(this.props)}>The Poster</h1>
         
        {this.props.userLogIn.length > 0 ?
        (<button className="navbar-btn" onClick={this.handleClick}>
          Add an Event
        </button>)
        : null }

        {this.state.display ? (
          <EventForm handleClick={this.handleClick} createEvent={this.props.createEvent} />
        ) : null} 
       
      </div>
    );
  }
}
