import React from 'react';
import MainIndexItem from './main_index_item';

const MainIndex = ({ currentUser, stories }) => {
  const mappedStories = stories.map((story, idx) => {
    return <MainIndexItem key={idx} story={story}></MainIndexItem>
  })

  return (
    <div className="main-index">
      <h1 className="main-index-title">Stories</h1>
      {mappedStories}
    </div>
  )
}

export default MainIndex;
