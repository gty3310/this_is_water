import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class StoryShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.getStory(thisprops.match.params.id);
  }

  handleUpdate() {
    this.props.history.push(`/stories/update/${this.props.story.id}`);
  }

  render() {
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let id = this.props.currentUser ? this.props.currentUser.id : 0;

    const story = this.props.story;

    if (!story) {
      return (
        <div>Loading Content</div>
      );
    } else {
      const update = () => {
        if (id === story.author_id) {
          return (
            <input className="story-update-button"
              type="submit"
              value="Update"
              onClick= {this.handleUpdate}></input>
          );
        } else {
          return (<div></div>);
        }
      };

      return (
        <div className="story-show">
          <img className="story-show-img" src={story.image_url} alt="story imageUrl"></img>
          <div className="story-body">
            <div className="story-header">
              <h1 className="story-title">{story.title}</h1>
              <div className="story-update">
                {update()}
                <div className="story-author">
                  <img className="story-author-avatar" src={story.userImageUrl} alt="user avatar"></img>
                  <div className="story-author-info">
                    <Link to={`users/${story.author_id}`}>
                      <p className= "story-author-username">{story.user_username}</p>
                    </Link>
                    <p className="story-date">
                      {monthShort[story.month-1]} {story.day}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="response-form-label">
              <span>Responses</span>
              <div className="responses-container">
                <div className="responses-form-container">
                  <p>Make a response</p>
                </div>
                <div className="responses-view-container">
                  <p>Read some responses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StoryShow;
