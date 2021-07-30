import React, { Component } from "react";
import EditForm from "./EditForm";
class EventDetails extends Component {
  state = {
    attendance: false,
  };

  attendEvent = (user) => {
    let newValue = !this.state.attendance;
    this.setState({
      attendance: newValue,
    });
    this.props.handleJoinEvent(user);
  };

  leaveEvent = (user) => {
    this.setState({
      attendance: false,
    });
    this.props.handleLeaveEvent(user);
  };

  handleDeleteEvent = () => {
    fetch(`http://localhost:3000/events/${this.props.selectedEvent.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        this.props.deleteEvent(this.props.selectedEvent.id);
      });
  };

  render() {
    let eventObj = this.props.selectedEvent;
    let users = this.props.selectedEvent.users;
    console.log(users);
    let filteredUsers =
      users.length > 0
        ? users.filter((user) => user === this.props.userLogIn[0])
        : [];
    console.log(filteredUsers.length);

    return (
      <div className="event-page">
        <div className="event-tile">
          {filteredUsers.length === 0 ? (
            <button
              onClick={() => this.attendEvent(this.props.userLogIn)}
              className="navbar-btn"
            >
              join
            </button>
          ) : (
            <button
              onClick={() => this.leaveEvent(this.props.userLogIn)}
              className="navbar-btn"
            >
              leave
            </button>
          )}

          <h2> {eventObj.name} </h2>
          <img alt="Event poster" src={eventObj.img} />
          <p>Description: {eventObj.description}</p>
          <p>Date: {eventObj.date} </p>
          <p>Time: {eventObj.time}</p>
          <p>Location: {eventObj.location}</p>
          <p>Price: ${eventObj.price}</p>
          {this.props.userLogIn[0].id === eventObj.user_id && (
            <button
              className="navbar-btn"
              onClick={() => this.handleDeleteEvent()}
            >
              Cancel Event
            </button>
          )}
          {this.props.userLogIn[0].id === eventObj.user_id && (
              <button className="navbar-btn">Edit</button>
            ) && (
              <EditForm
                userLogIn={this.props.userLogIn}
                editEvent={this.props.editEvent}
                selectedEvent={this.props.selectedEvent}
              />
            )}
        </div>
        <div className="attendee-list">
          <h2 className="attendees">Attendees:</h2>
          {Object.keys(eventObj).length > 0 &&
            eventObj.users.map((userObj) => (
              <div className="attendee">
                <h3>{userObj.username}</h3>
                <img alt="Profile" src={userObj.profile_img} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default EventDetails;
