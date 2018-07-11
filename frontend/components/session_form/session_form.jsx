import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      if (this.props.formType === 'signup') {
        return (
          <div className="signup-form-container">
            <div onClick={this.props.closeModal} className="close-x">&times;</div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h1 className="form-title">Join ThisIsWater</h1>
              <br></br>
              <p className="form-subheader">
                Create an account to write stories, follow your favorite authors and applaud those you love.
              </p>
              {this.renderErrors()}
              <div className="login-form">
                <br></br>
                <label>Email:
                  <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="sampleEmail@thisiswater.com"
                      />
                </label>
                <br></br>
                <label>Username:
                  <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                        placeholder="sampleUsername"
                      />
                </label>
                <br></br>
                <label>Password:
                  <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="password"
                      />
                </label>
                <br></br>
                <input className="session-submit" type="submit" value="Join" />
              </div>
            </form>
            <div className="otherform">
              {this.props.otherForm}
            </div>
          </div>
        );
      } else {
        return (
          <div className="login-form-container">
            <div onClick={this.props.closeModal} className="close-x">&times;</div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h1 className="form-title">Welcome back.</h1>
              <br></br>
              <p className="form-subheader">
                Sign in to write stories, follow your favorite authors and applaud those you love.
              </p>
              {this.renderErrors()}
              <div className="login-form">
                <br></br>
                <label>Email:
                  <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="sampleEmail@thisiswater.com"
                      />
                </label>
                <br></br>
                <label>Password:
                  <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="password"
                      />
                </label>
                <br></br>
                <input className="session-submit" type="submit" value="Continue" />
              </div>
            </form>
            <div className="otherform">
              {this.props.otherForm}
            </div>
          </div>
        );
      }
  }
}

export default withRouter(SessionForm);
