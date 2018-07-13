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
    this.demoLogin = this.demoLogin.bind(this);

    this.loginGuest = this.loginGuest.bind(this);
    this.demoLoginFresh = this.demoLoginFresh.bind(this);

  }

  loginGuest(emailArr, passwordArr, emailIdx, passwordIdx, submit) {
  if (emailIdx < emailArr.length) {
    let string = this.state.email + emailArr[emailIdx];
    this.setState({email: string}, () => {
      window.setTimeout(() => {
        this.loginGuest(emailArr, passwordArr, ++emailIdx, passwordIdx, submit);
      }, 50);
    });
  } else {
    if( passwordIdx === passwordArr.length) {
      submit.click();
      return;
    }
    let string = this.state.password + passwordArr[passwordIdx];
    this.setState({password: string}, () => {
      window.setTimeout(() => {
        this.loginGuest(emailArr, passwordArr, emailIdx, ++passwordIdx, submit);
      }, 50);
    });
  }
}

demoLoginFresh() {
  const emailArr = "guest@thisiswater.com";
  const passwordArr = "password";
  const submit = document.getElementById("session-submit-button");
  let emailIdx = 0;
  let passwordIdx = 0;
  this.loginGuest(emailArr, passwordArr, emailIdx, passwordIdx, submit);

}



  demoLogin(e) {
    this.setState({
      email: 'guest@thisiswater.com',
      username: 'Guest',
      password: 'password'
    });
    setTimeout(() => {this.props.login(this.state).then(this.props.closeModal);}, 1000);
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
          <div className="modal-form-container">
            <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <div className="modal-content-form-container">
            <div className="login-form-content">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h1 className="form-title">Join ThisIsWater</h1>
              <br></br>
              <p className="form-subheader">
                Create an account to write stories, follow your favorite authors and applaud those you love.
              </p>
              <br></br>
              {this.renderErrors()}
              <div className="login-form">
                <br></br>
                  <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="email"
                      />
                <br></br>
                  <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                        placeholder="username"
                      />
                <br></br>
                  <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="password"
                      />
                <br></br>
                <input id="session-submit-button" className="session-submit" type="submit" value="Join" />
              </div>
            </form>
            <div className="otherform">
              {this.props.otherForm}
            </div>
            <button className="modal-demo-login" onClick={this.demoLogin}>Guest Login</button>
            </div>
            <div className="terms">
              <p>To make ThisIsWater work, we log user data and share it with service providers.  Click "Continue" above to accept ThisIsWater's Terms of Service & Privacy Policy</p>
            </div>
          </div>
          </div>
        );
      } else {
        return (
          <div className="modal-form-container">
            <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <div className="modal-content-form-container">
            <div className="login-form-content">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h1 className="form-title">Welcome back.</h1>
              <br></br>
              <p className="form-subheader">
                Sign in to write stories, follow your favorite authors and applaud those you love.
              </p>
              <br></br>
              {this.renderErrors()}
              <div className="login-form">
                <br></br>
                  <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="email"
                      />
                <br></br>
                  <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="password"
                      />
                <br></br>
                <input id="session-submit-button" className="session-submit" type="submit" value="Continue" />
              </div>
            </form>
            <div className="otherform">
              {this.props.otherForm}
            </div>
            <button className="modal-demo-login" onClick={this.demoLoginFresh}>Guest Login</button>
            </div>
            <div className="terms">
              <p>To make ThisIsWater work, we log user data and share it with service providers.  Click "Continue" above to accept ThisIsWater's Terms of Service & Privacy Policy</p>
            </div>
          </div>
          </div>
        );
      }
  }
}

export default withRouter(SessionForm);
