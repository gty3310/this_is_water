import React from 'react';
import { Link } from 'react-router-dom';

import MainIndexItemInfo from '../main_content/main_index_item_info';

class UserItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    if (this.props.user.currentUserFollows) {
      this.props.unfollowUser(this.props.user.id);
    } else {
      this.props.followUser(this.props.user.id);
    }
  }

  render() {
    let followButtonText="Follow";
    let followClass="follow-button";

    if (this.props.user.currentUserFollows) {
      followButtonText="Following";
      followClass="follow-button-following";
    }


    return (
      <div className="user-item">
        <img className="user-item-image" src={this.props.user.image_url} img="user_avatar"></img>
        <div className="user-item-info">
          <div className="user-item-info-container">
            <Link className="story-form-author-username" to={`/users/${this.props.user.id}`}>
              {this.props.user.username}
            </Link>
            <button className={followClass} onClick={this.handleFollow}>
              {followButtonText}
            </button>
          </div>
          <h1 className="user-item-info-biography">
            {this.props.user.biography}
          </h1>
          <MainIndexItemInfo
            date={this.props.story.date}
            readTime={this.props.story.readTime}></MainIndexItemInfo>
        </div>
      </div>
    );
  }
}

export default UserItem;
