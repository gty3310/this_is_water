import React from 'react';
import ResponseIndexItem from './response_index_item';

const ResponseIndex = ({ responses }) => {
  const responseItems = responses.map((response, idx) => {
    return <ResponseIndexItem key={idx} response={response}></ResponseIndexItem>
  })

  return (
    <div className="response-index">
      {responseItems}
    </div>
  )
}

export default ResponseIndex;
