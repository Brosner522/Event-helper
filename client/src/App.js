import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import EventDetails from "./Components/EventDetails";
import EventContainer from "./Components/EventContainer";
import NavBar from "./Components/NavBar";

class App extends Component {
  state = {
    events: [],
    users: [],
    selectedEvent: [],
    userLogIn: [],
  };

  handleLogout = () => {
    this.props.history.push("/");
    this.setState({ userLogIn: [] });
  };

  handleHome = () => {
    this.state.userLogIn.length > 0
      ? this.props.history.push("/events")
      : this.props.history.push("/");
  };

  addEvent = (newEvent) => {
    this.setState({
      events: [...this.state.events, newEvent],
    });
  };

  createEvent = (newEvent) => {
    console.log(newEvent);
    const reqMethod = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    };

    fetch("http://localhost:3000/events", reqMethod)
      .then((res) => res.json())
      .then((returnEvent) => {
        console.log(returnEvent.errors);
        if (returnEvent.errors) {
          alert(returnEvent.errors.join("\n"));
        } else {
          let events = [...this.state.events, returnEvent];
          this.setState({
            events: events,
          });
        }
      });
  };

  selectEvent = (eventObj) => {
    this.setState({
      selectedEvent: eventObj,
    });
    this.props.history.push("/event");
  };

  handleLogInUser = (loginUserObj) => {
    this.setState({
      userLogIn: loginUserObj,
    });
  };

  addNewSignup = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  handleJoinEvent = (userLogIn) => {
    console.log("here");
    this.setState({
      users: [...this.state.users, userLogIn],
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((events) => {
        fetch("http://localhost:3000/users")
          .then((res) => res.json())
          .then((users) =>
            this.setState({
              events: events,
              users: users,
            })
          );
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          createEvent={this.createEvent}
          handleHome={this.handleHome}
          handleLogout={this.handleLogout}
          handleClick={this.handleClick}
          userLogIn={this.state.userLogIn}
        />

        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <Login
                addNewSignup={this.addNewSignup}
                users={this.state.users}
                handleSignUp={this.handleSignup}
                handleLogInUser={this.handleLogInUser}
                userLogIn={this.state.userLogIn}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/events"
            component={(props) => (
              <EventContainer
                {...props}
                userLogIn={this.state.userLogIn}
                selectEvent={this.selectEvent}
                events={this.state.events}
              />
            )}
          />
          <Route
            exact
            path="/event"
            component={(props) => (
              <EventDetails
                {...props}
                selectedEvent={this.state.selectedEvent}
                userLogIn={this.state.userLogIn}
                handleJoinEvent={this.handleJoinEvent}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
