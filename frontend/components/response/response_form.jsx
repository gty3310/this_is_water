import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class ResponseForm extends React.Component {
  constructor(props) {
    super(props);
    // const story = this.props.story || {};
    this.state={
      // possibly should be passing in ownParams
      story_id: props.story.id,
      body: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.id);
  }

  update(field) {
    //
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
    // this.setState(
    //   {body: e.target.value}
    // );
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createResponse(this.state);
  }

  render() {
    return (
      <form className="response-form" onSubmit={this.handleSubmit}>
        <div className="response-form-author-container">
          <Link className="response-author-image" to={`/users/${this.props.currentUser.id}`}>
          <img className="response-author-image" src={this.props.currentUser.avatar} alt="currentUseravatar"></img>
          </Link>

          <Link className="response-author-username" to={`/users/${this.props.currentUser.id}`}>
          <h1 className="response-author-username">{this.props.currentUser.username}</h1>
          </Link>
        </div>

        <textarea className="response-form-body"
          value={this.state.body}
          onChange={this.update('body')}
          placeholder="Response body"></textarea>

        <input className="response-form-button"
          type="submit"
          value="Publish"></input>
      </form>
    );
  }
}

export default withRouter(ResponseForm);
