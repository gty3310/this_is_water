import React from 'react';

const MainIndexItemInfo = ({date, readTime}) => {
  return (
    <div className="item-info">
      <h1 className="item-info-date">{date}</h1>
      <h1 className="item-info-readTime">{readTime}</h1>
    </div>
  )
}

export default MainIndexItemInfo;
