import React, { Component } from "react";

export default class EventForm extends Component {

    state = {
        name: '',
        date: '',
        time: '',
        location: '',
        price: '',
        description: '',
        img: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
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
        this.props.createEvent(newEvent)
        this.props.handleClick()
    }


    render() {
        
        return(
            <div className="event-form" >
                <form className="add-event" onSubmit={this.handleSubmit} >
                    <h3>Add an Event</h3>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter the name of the event..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} type="text" name="date" placeholder="Date: (YYYY-MM-DD) ..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} type="text" name="time" placeholder="Enter the event time..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} type="text" name="location" placeholder="Enter event location..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} type="text" name="price" placeholder="Enter event price..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} type="text" name="description" placeholder="Enter event description..." className="input-text" />
                    <br />
                    <input onChange={this.handleChange} type="text" name="img" placeholder="Enter event image..." className="input-text" />
                    <br />
                    <input  onClick={this.createEvent} type="submit" name="submit" value="Submit" className="button" />
                </form>

            </div>
        )
    }
}