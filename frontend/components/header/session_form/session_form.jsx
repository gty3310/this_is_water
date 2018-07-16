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

    this.demoLoginFlash = this.demoLoginFlash.bind(this);

    this.loginGuestLive = this.loginGuestLive.bind(this);
    this.demoLoginLive = this.demoLoginLive.bind(this);
  }

  loginGuestLive(emailArr, passwordArr, emailIdx, passwordIdx, submit) {
    if (emailIdx < emailArr.length) {
      let string = this.state.email + emailArr[emailIdx];
      this.setState({email: string}, () => {
        window.setTimeout(() => {
          this.loginGuestLive(emailArr, passwordArr, ++emailIdx, passwordIdx, submit);
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
          this.loginGuestLive(emailArr, passwordArr, emailIdx, ++passwordIdx, submit);
        }, 50);
      });
    }
  }

  demoLoginLive() {
    const emailArr = "guest@thisiswater.com";
    const passwordArr = "password";
    const submit = document.getElementById("session-submit-button");

    let emailIdx = 0;
    let passwordIdx = 0;

    this.loginGuestLive(emailArr, passwordArr, emailIdx, passwordIdx, submit);

  }

  demoLoginFlash(e) {
    this.setState({
      email: 'guest@thisiswater.com',
      username: 'Guest',
      password: 'password'
    });
    setTimeout(() => {this.props.login(this.state).then(this.props.closeModal);}, 1000);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
      if (this.props.formType === 'login') {
        return (
          <div className="modal-content">
            <div onClick={this.props.closeModal} className="modal-close">&times;</div>

            <div className="modal-content-container">
                  <h1 className="modal-form-title">Welcome back.</h1>
                  <br></br>
                  <p className="modal-form-subtitle">
                    Sign in to write stories, follow your favorite authors and applaud those you love.
                  </p>
                  <br></br>
                  {this.renderErrors()}
                  <form onSubmit={this.handleSubmit} className="modal-form-container">
                  <div className="modal-form-inputs">
                    <br></br>
                      <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="modal-input"
                            placeholder="email"
                          />
                    <br></br>
                      <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="modal-input"
                            placeholder="password"
                          />
                    <br></br>
                    <input id="session-submit-button" className="modal-inputSubmit-button" type="submit" value="Continue" />
                  </div>
                </form>
                <div className="modal-altForm-button">
                  {this.props.otherForm}
                </div>
                <button className="modal-demo-button" onClick={this.demoLoginLive}>Continue as Guest</button>
                <div className="modal-terms">
                  <p>To make ThisIsWater work, we log user data and share it with service providers.  Click "Continue" above to accept ThisIsWater's Terms of Service & Privacy Policy</p>
                </div>
            </div>

          </div>
        );
      } else {
        return (
          <div className="modal-content">

            <div onClick={this.props.closeModal} className="modal-close">&times;</div>

            <div className="modal-content-container">
                <h1 className="modal-form-title">Join ThisIsWater</h1>
                <br></br>
                <p className="modal-form-subtitle">
                  Create an account to write stories, follow your favorite authors and applaud those you love.
                </p>
                <br></br>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="modal-form-container">
                <div className="modal-form-inputs">
                  <br></br>
                    <input type="text"
                          value={this.state.email}
                          onChange={this.update('email')}
                          className="modal-input"
                          placeholder="email"
                        />
                  <br></br>
                    <input type="text"
                          value={this.state.username}
                          onChange={this.update('username')}
                          className="modal-input"
                          placeholder="username"
                        />
                  <br></br>
                    <input type="password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          className="modal-input"
                          placeholder="password"
                        />
                  <br></br>
                  <input id="session-submit-button" className="modal-inputSubmit-button"
                    type="submit"
                    value="Join" />
                </div>
              </form>
              <div className="modal-altForm-button">
                {this.props.otherForm}
              </div>
              <button className="modal-demo-button" onClick={this.demoLoginFlash}>Continue as Guest</button>
              <div className="modal-terms">
                <p>To make ThisIsWater work, we log user data and share it with service providers.  Click "Continue" above to accept ThisIsWater's Terms of Service & Privacy Policy</p>
              </div>
            </div>

          </div>
        );
      }
  }
}

export default withRouter(SessionForm);
