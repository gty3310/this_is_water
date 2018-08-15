import React from 'react';

class LoadingScreen extends React.Component {
  render() {
    return (
      <div className="loading-screen">
        <input
          type='text'
          value={'loading...'}
          readOnly="readonly"
          autoFocus></input>
      </div>
    );
  }
}

export default LoadingScreen;
