import React, { Component } from "react";

class EventDetails extends Component {
  render() {
    let eventObj = this.props.selectedEvent;
    return (
      <div className="event-page">
          <div className="event-tile">
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
              <img alt="Profile" src={userObj.profile_img} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventDetails;
