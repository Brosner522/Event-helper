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
        <h1 onClick={() => this.props.handleHome(this.props)}>Poster</h1>
         
        {this.props.userLogIn.length > 0 ?
        (<><button className="navbar-btn" onClick={this.handleClick}>
          Add an Event
        </button>
        <img className="navbar-img" alt="profile" src={this.props.userLogIn[0].profile_img}/>
        <button className="navbar-btn" onClick={() => this.props.handleLogout(this.props)} >Log out</button>
        </>)
        : null }

        {this.state.display ? (
          <EventForm handleClick={this.handleClick} createEvent={this.props.createEvent} userLogIn={this.props.userLogIn} />
        ) : null} 

        

      </div>
    );
  }
}
