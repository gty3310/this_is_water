import React from 'react';
import { withrouter } from 'react-router';
import { Link } from 'react-router-dom';

import UserItem from '../story/user_item';
import MainIndexItem from '../main_content/main_index_item';
import MainIndex from '../main_content/main_index';


class UserShow extends React.Component {
  constructor(props) {
    super(props);

    // this.handleUpdate = this.handleUpdate.bind(this);

    // this.loadingScreen = this.loadingScreen.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    if (this.props.user.currentUserFollows) {
      this.props.unfollowUser(this.props.user.id);
    } else {
      this.props.followUser(this.props.user.id);
    }
  }

  // loadingScreen() {
  //
  //   setTimeout(
  //     () => {
  //       return <div>Content Loading</div>;
  //     }, 5000
  //   );
  // }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.getUser(this.props.match.params.id);
    this.props.fetchAllStories();
  }

  // handleUpdate(id) {
  //   this.props.history.push(`/stories/update/${id}`);
  // }

  render() {
    if (!this.props.user) {
      return null;
    }

    const monthLong = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "Octtober", "November", "December"
    ];

    let followButtonText="Follow";
    let followClass="follow-button";

    if (this.props.user.currentUserFollows) {
      followButtonText="Following";
      followClass="follow-button-following";
    }


    const ownStories = this.props.stories.map((story, idx) => {
      return (<MainIndexItem key={idx} story={story}></MainIndexItem>);
    });

    return (
      <div className="profile-user">
        <div className="profile-user-avatar-info-holder">
        <Link to={`/users/${this.props.user.id}`}>
        <img className="profile-user-image" src={this.props.user.avatar} alt="user_avatar"></img>
        </Link>

        <div className="profile-user-info">
          <div className="profile-user-info-container">
            <div className="profile-username-follow-button">
            <Link className="profile-username" to={`/users/${this.props.user.id}`}>
              {this.props.user.username}
            </Link>
            <button className={followClass} onClick={this.handleFollow}>
              {followButtonText}
            </button>
          </div>
            <div className="profile-email">
              {this.props.user.email}
            </div>
            <div className="profile-biography">
              {this.props.user.biography}
            </div>
            <div className="profile-joinDate">
              Member since {monthLong[this.props.user.month-1]} {this.props.user.year}
            </div>
          </div>
        </div>

        </div>

        <div className="profile-user-stories">
          <h1 className="profile-user-stories-header">
            Stories by {this.props.user.username}:
          </h1>
          <div className="profile-user-ownStories">
            {ownStories}
          </div>
        </div>
      </div>
    );

  }
}

export default UserShow;
