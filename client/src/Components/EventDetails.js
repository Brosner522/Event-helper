import React, { Component } from "react";

class EventDetails extends Component {

  state = {
    attendance: false
  }

attendEvent = (user) => {
  let newValue = !this.state.attendance
  this.setState({
    attendance: newValue
  })

  this.props.handleJoinEvent(user)
}

leaveEvent = (user) => {
  this.setState({
    attendance: false
  })

  this.props.handleLeaveEvent(user)
}

  render() {
    let eventObj = this.props.selectedEvent;
    let users = this.props.selectedEvent.users;
    let filteredUsers = users.filter((user) => user === this.props.userLogIn[0])
    console.log(filteredUsers.length)
    
    return (
      <div className="event-page">
          <div className="event-tile">
            { filteredUsers.length === 0  ? <button onClick={() => this.attendEvent(this.props.userLogIn)}  className="navbar-btn">join</button> : <button onClick={() => this.leaveEvent(this.props.userLogIn)}
            className="navbar-btn">leave</button> }
            
            
        <h2> {eventObj.name} </h2>
        <img alt="Event poster" src={eventObj.img} />
        <p>Description: {eventObj.description}</p>
        <p>Date: {eventObj.date} </p>
        <p>Time: {eventObj.time}</p>
        <p>Location: {eventObj.location}</p>
        <p>Price: ${eventObj.price}</p>
        </div>
        <div className="attendee-list">
          <h2 className="attendees">Attendees:</h2>
          {eventObj.users.map((userObj) => (
            <div className="attendee">
              <h3>{userObj.username}</h3>
              {/* fix styling when joing an event */}
              <img alt="Profile" src={userObj.profile_img} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventDetails;
