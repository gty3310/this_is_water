import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      avatar: null,
      avatarUrl: null
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
        }, 100);
      });
    } else {
      if( passwordIdx === passwordArr.length) {
        this.props.demoLogin().then(this.props.closeModal);
        // submit.click();
        // return;
      }

      let string = this.state.password + passwordArr[passwordIdx];
      this.setState({password: string}, () => {
        window.setTimeout(() => {
          this.loginGuestLive(emailArr, passwordArr, emailIdx, ++passwordIdx, submit);
        }, 100);
      });
    }
  }

  demoLoginLive() {
    const emailArr = "Thanks Simcha <3";
    const passwordArr = "password";
    const submit = document.getElementById("session-submit-button");

    let emailIdx = 0;
    let passwordIdx = 0;

    this.loginGuestLive(emailArr, passwordArr, emailIdx, passwordIdx, submit);

  }

  demoLoginFlash(e) {
    this.setState({
      email: 'andrewdong@uchicago',
      username: 'Andrew Dong',
      password: 'password'
    });
    setTimeout(() => {this.props.demoLogin().then(this.props.closeModal);}, 1000);
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
    const formData = new FormData();
    formData.append("user[email]", this.state.email);
    formData.append(`user[username]`, this.state.username);
    formData.append(`user[password]`, this.state.password);
    if (this.state.avatar !== null) {
      formData.append(`user[avatar]`, this.state.avatar);
    }


    // const user = Object.assign({}, this.state);

    this.props.processForm(formData).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul className="modal-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({avatar: file, avatarUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
      const preview = this.state.avatarUrl ? <img className="image-preview" src={this.state.avatarUrl}></img> : null;

      if (this.props.formType === 'login') {
        return (
          <div className="modal-content">
            <div onClick={this.props.closeModal} className="modal-close">&times;</div>

            <div className="modal-content-container">
                  <h1 className="modal-form-title">Welcome back.</h1>
                  <p className="modal-form-subtitle">
                    Sign in to write stories, follow your favorite authors and applaud those you love.
                  </p>
                  {this.renderErrors()}
                  <form onSubmit={this.handleSubmit} className="modal-form-container">
                    <div className="modal-form-inputs">
                      <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="modal-input"
                            placeholder="email"
                          />
                      <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="modal-input"
                            placeholder="password"
                          />
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
                <p className="modal-form-subtitle">
                  Create an account to write stories, follow your favorite authors and applaud those you love.
                </p>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="modal-form-container">
                <div className="modal-form-inputs">
                    <input type="text"
                          value={this.state.email}
                          onChange={this.update('email')}
                          className="modal-input"
                          placeholder="email"
                        />
                    <input type="text"
                          value={this.state.username}
                          onChange={this.update('username')}
                          className="modal-input"
                          placeholder="username"
                        />
                    <input type="password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          className="modal-input"
                          placeholder="password"
                        />
                  <input type="file"
                    className="modal-add-avatar"
                    onChange={this.handleFile.bind(this)}></input>
                    {preview}
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
