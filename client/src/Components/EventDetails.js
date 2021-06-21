import React, { Component } from "react";

class EventDetails extends Component {
  render() {
    let eventObj = this.props.selectedEvent;
    return (
      <div>
        <h2> {eventObj.name} </h2>
        <img src={eventObj.img} />
        <p>Description: {eventObj.description}</p>
        <p>Date: {eventObj.date} </p>
        <p>Time: {eventObj.time}</p>
        <p>Location: {eventObj.location}</p>
        <p>Price: {eventObj.price}</p>
        <div className="attendees">
          <h2>Attendees:</h2>
          {eventObj.users.map((userObj) => (
            <div>
              <h3>{userObj.username}</h3>
              <img src={userObj.profile_img} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventDetails;
