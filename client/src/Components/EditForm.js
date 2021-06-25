import React, { Component } from "react";

export default class EditForm extends Component {

    state = {
        name: this.props.selectedEvent.name,
        date: this.props.selectedEvent.date,
        time: this.props.selectedEvent.time,
        location: this.props.selectedEvent.location,
        price: this.props.selectedEvent.price,
        description: this.props.selectedEvent.description,
        img: this.props.selectedEvent.img
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEdit = (e) => {
        e.preventDefault()
        let newEvent = {
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        location: this.state.location,
        price: this.state.price,
        description: this.state.description,
        img: this.state.img,
        user_id: this.props.userLogIn[0].id
        }
        this.props.editEvent(newEvent)
    }



    render() {
        
        return(
            <div className="event-form" >
                <form className="add-event" onSubmit={this.handleEdit} >
                    <h3>Update an Event</h3>
                    <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Enter the name of the event..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} value={this.state.date} type="text" name="date" placeholder="Date: (YYYY-MM-DD) ..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} value={this.state.time} type="text" name="time" placeholder="Enter the event time..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} value={this.state.location} type="text" name="location" placeholder="Enter event location..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} value={this.state.price} type="text" name="price" placeholder="Enter event price..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Enter event description..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} value={this.state.img} type="text" name="img" placeholder="Enter event image..." className="input-text" />
                    <br />
                    <input type="submit" name="submit" value="Submit" className="button" />
                </form>

            </div>
        )
    }
}