import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import UserItem from './user_item';
import StoryResponses from '../response/story_responses';
import ClapButton from '../clap/clap_button';

class ShowStory extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.id);
    // .then(
    //   this.props.fetchAllUsers
    // );
  }

  render() {

    if (!this.props.story || !this.props.author || !this.props.responses) {
      return <div></div>;
    }

    const sections = this.props.story.body.split('\n').map((section, idx) => {
      return <p key={idx} className="story-body">{section}</p>;
    });

    return (
      <div className="story">

        <UserItem
          user={this.props.author}
          story={this.props.story}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}></UserItem>

        <h1 className="story-title">
          {this.props.story.title}
        </h1>


        <h3 className="story-header">
          {this.props.story.header}
        </h3>

        <img className="story-photo" src={this.props.story.photo} alt="storyImageurl"></img>

        {sections}

        <ClapButton
          content={this.props.story}
          type="Story"></ClapButton>

        <StoryResponses
          story={this.props.story}></StoryResponses>

      </div>
    );
  }
}

export default withRouter(ShowStory);
