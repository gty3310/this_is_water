import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    //
    // const story = Object.assign({}, this.state);
    //
    // this.props.submitAction(story).then(
    //   success => this.props.history.push('/'),
    //   failure => console.log(failure)
    // );

    e.preventDefault();
    const formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[header]", this.state.header);
    formData.append("story[body]", this.state.body);
    if (this.state.photo !== null) {
      formData.append("story[photo]", this.state.photo);
    }

    this.props.submitAction(formData).then(
      success => this.props.history.push('/'),
      failure => console.log(failure)
    );
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photo: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    const preview = this.state.photoUrl ? <img className="story-form-image-preview" src={this.state.photoUrl}></img> : null;

    return (
      <div className="story-form-container">

        <div className="story-form-author-container">

          <Link to={`/users/${currentUser.id}`}>
          <img className="header-image" src={currentUser.avatar} alt="current_user_avatar"></img>
          </Link>


          <div className="story-form-author-info">
            <Link to={`/users/${currentUser.id}`}>
            <p className="story-form-author-username">{currentUser.username}</p>
            </Link>
            <p className="story-form-author-biography">{currentUser.biography}</p>
            <p className="story-form-author-draft">Draft</p>
          </div>


        </div>

        <form className="story-form" onSubmit={this.handleSubmit}>

          <input className="story-form-title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Title"
          ></input>

          <input className="story-form-header"
            type="text"
            value={this.state.header}
            onChange={this.update('header')}
            placeholder="Header"
          ></input>

        <textarea className="story-form-body"
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Body"
          ></textarea>

          <input type="file"
            className="modal-add-avatar"
            onChange={this.handleFile.bind(this)}></input>

          {preview}

          <input className="story-form-button"
            type="submit"
            value={this.props.type}
          ></input>

        </form>

      </div>
    );
  }
}

export default withRouter(StoryForm);

// <form className="story-form" onSubmit={this.handleSubmit}>
//
//   <input className="story-form-title">
//     type="text"
//     value={this.state.title}
//     onChange={this.update('title')}
//     placeholder="Title"
//   </input>
//
//   <input className="story-form-header">
//     type="text"
//     value={this.state.header}
//     onChange={this.update('header')}
//     placeholder="Header"
//   </input>
//
//   <input className="story-form-body">
//     type="text"
//     value={this.state.body}
//     onChange={this.update('body')}
//     placeholder="Body"
//   </input>
//
//   <input className="story-form-button">
//     type="submit"
//     value={this.props.type}
//   </input>
//
// </form>
