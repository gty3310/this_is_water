import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class StoryNew extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      title: '',
      body: '',
      image_url: '',
      video_url: ''
    };
    this.errors= "";
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }


  update(field) {
    if (this.state.title !== "" &&
    this.state.body !== "") {
      this.errors = "";
    }

    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    const story = this.state;

    this.props.createStory({story}).then(
      story => {
        console.log(story);
        this.props.history.push(`/stories/${story.id}`);
      }
    );
    this.errors = "Title and Body cannot be empty";
    this.render();
  }

  renderErrors(errors) {
    return (
      <div className="story-errors">
        {errors}
      </div>
    );
  }

  render() {
    if (!!this.props.currentUser){
      const user = this.props.currentUser;
        return (
          <div className="editor-header">
            <div className="editor-header-content">
              <div className="story-author-info">

                <Link to={`/users/${user.id}`}>
                  <img className="story-editor-img" src={user.image_url} alt="User Image Url"></img>
                </Link>
                <div className="story-editor-name">
                  <Link to={`/users/${user.id}`}>
                    <p className="story-editor-username">{user.username}</p>
                  </Link>
                  <p className="story-editor-biography">{user.biography}</p>
                  <p className="story-editor-draft-text">Draft</p>
                </div>
              </div>
              <div className="story-errors-container">
                <input className="story-submit-button"
                  type="submit"
                  value="Publish"
                  onClick = {this.handleSubmit}>
                </input>
                {this.renderErrors(this.errors)}
              </div>
            </div>

            <div className="editor">
              <input className="editor-title"
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder='Title'></input>
              <input className="editor-body"
                type="text"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder='Body'></input>
            </div>
          </div>
        );
    } else {
      return (
        <Redirect to="/"></Redirect>
      );
    }
  }
}

export default withRouter(StoryNew);




// <input className="editor-image_url"
//   type="text"
//   value={this.state.image_url}
//   onChange={this.update('image_url')}
//   placeholder='Image-url'></input>
// <input className="editor-video_url"
//   type="text"
//   value={this.state.video_url}
//   onChange={this.update('video_url')}
//   placeholder='Video-url'></input>
