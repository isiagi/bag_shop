import React from 'react';
import './Register.css';

const { Component } = React;

class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'signUp',
      input: {},
    };
  }

  changeView = (view) => {
    this.setState({
      currentView: view,
    });
  };

  handleChange = (e) => {
    let input = this.state.input;
    input[e.target.name] = e.target.value;
    this.setState({
      input,
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/user/register', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        email: this.state.input.email,
        password: this.state.input.password,
        username: this.state.input.username,
      }),
    })
      .then((doc) => {
        if (doc.ok) {
          return doc.json();
        } else {
          throw new Error('something has happened');
        }
      }).then((res) => {
        localStorage.setItem("token", res.token);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/user/login', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        email: this.state.input.email,
        password: this.state.input.password,
      }),
    })
      .then((doc) => {
        if (doc.ok) {
          return doc.json();
        } else {
          throw new Error('something has happened');
        }
      }).then((res) => {
        localStorage.setItem("token", res.token);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  handleReset = (e) => {
    alert('heyy')
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/user/forgotPassword', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        email: this.state.input.email,
      }),
    })
      .then((doc) => {
        if (doc.ok) {
          alert('hello')
          return doc.json();
        } else {
          throw new Error('something has happened');
        }
      }).then((res) => {
        localStorage.setItem("token", res.token);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  currentView = () => {
    switch (this.state.currentView) {
      case 'signUp':
        return (
          <form>
            {this.state.input.email}
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    required
                  />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    required
                  />
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleSignUp}>Submit</button>
            <button type="button" onClick={() => this.changeView('logIn')}>
              Have an Account?
            </button>
          </form>
        );
        break;
      case 'logIn':
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    required
                  />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView('PWReset')} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleLogin}>Login</button>
            <button type="button" onClick={() => this.changeView('signUp')}>
              Create an Account
            </button>
          </form>
        );
        break;
      case 'PWReset':
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleReset}>Send Reset Link</button>
            <button type="button" onClick={() => this.changeView('logIn')}>
              Go Back
            </button>
          </form>
        );
      default:
        break;
    }
  };
  render() {
    return (
    <section id="entry-page">{this.currentView()}</section>
    );
  }
}

export default EntryPage;
