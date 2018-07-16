import React from 'react';
import { withRouter } from 'react-router-dom';

class ResponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      // possibly should be passing in ownParams
      storyId: this.props.story.id,
      body: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState(
      {body: e.target.value}
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createResponse(this.state);
  }

  render() {
    return (
      <form className="response-form">
        <div className="response-form-author-container">
          <img className="response-author-image" src={this.props.currentUser.image_ur} alt="currentUseravatar"></img>
          <h1>{this.props.currentUser.username}</h1>
        </div>

        <input className="response-form-body"
          value={this.state.body}
          onChange={this.update('body')}
          placeholder="Response body"></input>

        <input className="response-form-button"
          type="submit"
          value={Publish}></input>
      </form>
    );
  }
}

export default withRouter(ResponseForm);
