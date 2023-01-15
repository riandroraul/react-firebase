import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addDataToAPi, getDataFromApi } from "../../../config/redux/action";
import { database } from "../../../config/firebase";
import "./dashboard.scss";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
  };

  getDataFirebase = () => {
    // const starCountRef = ref(database, "posts/" + postId + "/starCount");
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userdata"));
    const { getNotes } = this.props;
    getNotes(userData.uid);
  }

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const { saveNotes } = this.props;
    const userData = JSON.parse(localStorage.getItem("userdata"));
    const data = {
      title,
      content,
      date: new Date().getTime(),
      userId: userData.uid,
    };
    saveNotes(data);
  };

  onInputChange = (el, type) => {
    this.setState({
      [type]: el.target.value,
    });
  };

  render() {
    const { notes } = this.props;
    const { title, content } = this.state;
    return (
      <div className="container">
        <div className="input-form">
          <input
            type="text"
            placeholder="title"
            value={title}
            className="input-title"
            onChange={(e) => this.onInputChange(e, "title")}
          />
          <textarea
            name="content"
            value={content}
            className="input-content"
            id="content"
            cols="30"
            rows="10"
            onChange={(e) => this.onInputChange(e, "content")}
            placeholder="content"
          ></textarea>
          <button className="save-btn" onClick={this.handleSaveNotes}>
            simpan
          </button>
        </div>
        <hr />
        {notes.length > 0 ? (
          <Fragment>
            {notes.map((note) => {
              return (
                <div className="card-content" key={note.id}>
                  <p className="title">{note.data.title}</p>
                  <p className="date">{note.data.date}</p>
                  <p className="content">{note.data.content}</p>
                </div>
              );
            })}
          </Fragment>
        ) : null}
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.user,
  notes: state.notes,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPi(data)),
  getNotes: (data) => dispatch(getDataFromApi(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
