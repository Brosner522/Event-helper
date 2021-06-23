import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    age: "",
    profile_img: "",
    password_digest: "",
  };

  handleLogin = (e) => {
    e.preventDefault();
    // console.log(e)
    let filteredArray = this.props.users.filter((user) => {
      return user.username.toLowerCase() === e.target[0].value.toLowerCase();
    });
    if (filteredArray.length > 0) {
      this.props.handleLogInUser(filteredArray);
      this.props.history.push("/");
      alert(`Welcome back ${filteredArray[0].username}`);
    } else alert("Invalid User");
  };

  handleSignup = (e) => {
    e.preventDefault();
    let newUser = {
      username: this.state.username,
      age: this.state.age,
      profile_img: this.state.profile_img,
      password_digest: this.state.password_digest,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      console.log(res.status)
      console.log(res.json().error)
      if (res.status === 201) {
        alert("You can now log in")
        this.props.addNewSignup(newUser);
      } else if (res.status === 400) {
        alert(res.json());
      }
    });
  };


  render() {
    return (
      <div className="forms">
        <form className="login" onSubmit={(e) => this.handleLogin(e)}>
          <label>
            Log In
            <p className="login-input">
              <input
                type="text"
                placeholder="Enter your username"
                username="username"
              />
            </p>
            <p className="login-input">
              <input
                type="text"
                placeholder="Enter your password"
                password="password"
              />
            </p>
          </label>
          <p className="login-input">
            <input className="login-btn" type="submit" value="Log In" />
          </p>
        </form>

        <form className="signup" onSubmit={(e) => this.handleSignup(e)}>
          <label>
            Sign Up
            <p className="login-input">
              <input
                type="text"
                placeholder="Choose a user name"
                username="username"
                value={this.state.username}
                onChange={(e)=> this.setState({username: e.target.value.toLowerCase()})}
              />
            </p>
            <p className="login-input">
              <input
                type="number"
                placeholder="Please enter your age"
                age="age"
                value={this.state.age}
                onChange={(e) => this.setState({age: e.target.value})}
              />
            </p>
            <p className="login-input">
              <input
                type="url"
                placeholder="Upload a picture"
                profile_img="profile image"
                value={this.state.profile_img}
                onChange={(e) => this.setState({profile_img: e.target.value})}
              />
            </p>
            <p className="login-input">
              <input
                type="text"
                placeholder="Choose a password"
                password="password"
                value={this.state.password_digest}
                onChange={(e) => this.setState({password_digest: e.target.value})}
              />
            </p>
          </label>
          <p className="login-input">
            <input className="signup-btn" type="submit" value="Sign Up" />
          </p>
        </form>
      </div>
    );
  }
}
