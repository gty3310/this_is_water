import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class StoryUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.story = this.props.story;

    if (this.story) {
      this.state = {
        title: this.story.title,
        body: this.story.body,
        image_url: this.story.image_url,
        video_url: this.story.video_url
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getStory(this.props.match.params.id);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    const story = this.state;
    this.props.updateStory({story}, parseInt(this.props.match.params.id));
  }

  render() {
    if (!!this.props.currentUser && (this.props.currentUser.id === this.story.author_id)) {
      const user = this.props.currentUser;
      return (
        <div className="editor-main">
          <div className="story-submit-container">
            <div className="story-author-info">
              <Link to={`/users/${user.id}`}>
                <img className="story-editor-img" src={user.image_url} alt="User Image Url"></img>
              </Link>

              <div className="story-editor-name">
                <Link to={`/users/${user.id}`}>
                  <p className="story-editor-username">{user.username}</p>
                </Link>
                <p className="story-editor-biography">{user.biography}</p>
                <p className="story-editor-draft-text">Update</p>
              </div>
            </div>
            <input className="story-submit-button"
              type="submit"
              value="Publish Updates"
              onClick={this.handleSubmit}></input>
          </div>

          <div className="editor">
            <input className="editor-title"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeHolder='Title'></input>
            <input className="editor-image_url"
              type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')}
              placeHolder='Image-url'></input>
            <input className="editor-video_url"
              type="text"
              value={this.state.video_url}
              onChange={this.update('video_url')}
              placeHolder='Video-url'></input>
            <input className="editor-body"
              type="text"
              value={this.state.body}
              onChange={this.update('body')}
              placeHolder='Body'></input>
          </div>
        </div>
      );
    } else {
      return (
        <Redirect to='/'></Redirect>
      );
    }
  }
}

export default withRouter(StoryUpdate);
