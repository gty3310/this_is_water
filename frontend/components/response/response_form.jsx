import React from 'react';
import ReactQuill from 'react-quill';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class ResponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      story_id: props.story.id,
      body: '',
      placeholder: "Response body"
    };

    this.update = this.update.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.id);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleQuill(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createResponse(this.state).then(this.setState({body: ''}));
  }

  render() {
    return (
      <form className="response-form" onSubmit={this.handleSubmit}>
        <link href={"https://cdn.quilljs.com/1.3.6/quill.snow.css"} rel="stylesheet"/>
        <div className="response-form-author-container">
          <Link className="response-author-image" to={`/users/${this.props.currentUser.id}`}>
          <img className="response-author-image" src={this.props.currentUser.avatar} alt="currentUseravatar"></img>
          </Link>

          <Link className="response-author-username" to={`/users/${this.props.currentUser.id}`}>
          <h1 className="response-author-username">{this.props.currentUser.username}</h1>
          </Link>
        </div>

        <ReactQuill className="response-form-body"
          theme="snow"
          value={this.state.body}
          onChange={this.handleQuill}
          modules={ResponseForm.modules}
          formats={ResponseForm.formats}
          placeholder={this.state.placeholder}>
        </ReactQuill>

        <input className="response-form-button"
          type="submit"
          value="Publish"></input>
      </form>
    );
  }
}

ResponseForm.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};

ResponseForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default withRouter(ResponseForm);
