import React, { Component } from "react";

class EventContainer extends Component {
    render() {
      return (
          <div>
          {this.props.events.map((eventObj) => 
           <div onClick={() => this.props.selectEvent(eventObj)} className="event">
            <h2> {eventObj.name} </h2>
            <img src={eventObj.img}/>
            <p>Description: {eventObj.description}</p> 
            {/* <p>Date: {eventObj.date} </p>
            <p>Time: {eventObj.time}</p>
            <p>Location: {eventObj.location}</p>
            <p>Price: {eventObj.price}</p> */}
           </div>
          )}
              
          </div>
      )
    }
}

export default EventContainer