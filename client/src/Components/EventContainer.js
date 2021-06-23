import React, { Component } from "react";

class EventContainer extends Component {
  render() {
    return (
      <div className="container-page">
        
        <div className="event-container">
          {this.props.events.map((eventObj) => (
            <div
              className="event"
              onClick={() => this.props.selectEvent(eventObj)}
            >
              <h2> {eventObj.name} </h2>
              <img alt="Event poster" src={eventObj.img} />
              <p>{eventObj.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventContainer;
