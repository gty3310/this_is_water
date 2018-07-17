import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MainIndexItemInfo from './main_index_item_info';

const MainIndexItem = ({ story, author }) => {
  return (
    <div className="main-index-item">
      <div className="main-index-item-content">
        <div className="item-story">
          <Link to={`/stories/${story.id}`}>
            <h1 className="item-story-title">{story.title}</h1>
          </Link>
            <h1 className="item-story-header">{story.header}</h1>
            <h1 className="item-story-body-preview">{story.body}</h1>

          <Link to={`/users/${author.id}`}>
            <h1 className="item-story-author">{author.username}</h1>
          </Link>
        </div>

        <MainIndexItemInfo
          date={story.date}
          readTime={story.readTime}></MainIndexItemInfo>
      </div>
      <div className="main-index-item-image">
        <Link to={`/stories/${story.id}`}>
          <img src={story.image_url} alt="storyImageurl"></img>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.entities.users[ownProps.story.author_id]
  }
}

export default connect(
  mapStateToProps, null
)(MainIndexItem);
