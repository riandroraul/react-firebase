import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  addDataToAPi,
  deleteDataApi,
  getDataFromApi,
  updateDataApi,
} from "../../../config/redux/action";
import "./dashboard.scss";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
    textBtn: "Simpan",
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
    const { title, content, textBtn, noteId } = this.state;
    const { saveNotes, updateNotes } = this.props;
    const userData = JSON.parse(localStorage.getItem("userdata"));
    const data = {
      title,
      content,
      date: new Date().getTime(),
      userId: userData.uid,
      noteId: "",
    };
    if (textBtn === "Simpan") {
      saveNotes(data);
    } else {
      data.noteId = noteId;
      updateNotes(data);
    }
  };

  onInputChange = (el, type) => {
    this.setState({
      [type]: el.target.value,
    });
  };

  updateNotes = (note) => {
    this.setState({
      title: note.data.title,
      content: note.data.content,
      textBtn: "Update",
      noteId: note.id,
    });
  };

  cancelUpdate = (note) => {
    this.setState({
      title: "",
      content: "",
      textBtn: "Simpan",
    });
  };

  deleteNote = (el, note) => {
    el.stopPropagation();
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    const data = {
      userId: userdata.uid,
      noteId: note.id,
    };
    this.props.deleteNote(data);
  };

  render() {
    const { notes } = this.props;
    const { title, content, textBtn } = this.state;
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
          <div className="action-wrapper">
            {textBtn === "Update" ? (
              <button className="save-btn cancel" onClick={this.cancelUpdate}>
                Cancel
              </button>
            ) : (
              <div />
            )}
            <button className="save-btn" onClick={this.handleSaveNotes}>
              {this.state.textBtn}
            </button>
          </div>
        </div>
        <hr />
        {notes.length > 0 ? (
          <Fragment>
            {notes.map((note) => {
              return (
                <div
                  className="card-content"
                  key={note.id}
                  onClick={() => this.updateNotes(note)}
                >
                  <p className="title">{note.data.title}</p>
                  <p className="date">{note.data.date}</p>
                  <p className="content">{note.data.content}</p>
                  <div
                    className="delete-btn"
                    onClick={(el) => this.deleteNote(el, note)}
                  >
                    x
                  </div>
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
  updateNotes: (data) => dispatch(updateDataApi(data)),
  deleteNote: (data) => dispatch(deleteDataApi(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
