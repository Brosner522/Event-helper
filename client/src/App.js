
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Login from './Components/Login';
import EventDetails from './Components/EventDetails';
import EventContainer from './Components/EventContainer';
import NavBar from './Components/NavBar';

class App extends Component {
  state = {
    events: [],
    users: [],
    selectedEvent: [],
    userLogIn: []
  };

  handleHome = () => {
    this.props.history.push("/");
  };

  selectEvent = (eventObj) => {
    this.setState({
      selectedEvent: eventObj
    })
    this.props.history.push("/event");
  }

  handleLogInUser = (loginUserObj) => {
    this.setState({
      userLogIn: loginUserObj
    })
  }

  addNewSignup = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    })
  }

  
  componentDidMount() {
    fetch("http://localhost:3000/events")
    .then((res) => res.json())
    .then((events) => {
      fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          events: events,
          users: users
      }))
    }) 
  }

  render() {
    return (
        <div className="App">
          <NavBar handleHome={this.handleHome}/>
          <Switch>
          <Route 
            exact path = "/"
            component={(props) => <Login addNewSignup= {this.addNewSignup} users={this.state.users} handleSignUp={this.handleSignup} handleLogInUser={this.handleLogInUser} userLogIn = {this.state.userLogIn} {...props}/>}
            />
            <Route
              exact
              path="/events"
              component={(props) => <EventContainer {...props} selectEvent={this.selectEvent} events={this.state.events} />}
              />
            <Route
            exact
            path="/event"
            component={(props) => <EventDetails {...props} selectedEvent = {this.state.selectedEvent}/>}
             />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
