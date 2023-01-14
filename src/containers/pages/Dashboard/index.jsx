import React, { Component } from "react";
import { connect } from "react-redux";
import { addDataToAPi } from "../../../config/redux/action";
import "./dashboard.scss";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
  };

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const { saveNotes } = this.props;
    const data = {
      title,
      content,
      date: new Date().getTime(),
      userId: this.props.userData.uid,
    };
    saveNotes(data);
  };

  onInputChange = (el, type) => {
    this.setState({
      [type]: el.target.value,
    });
  };

  render() {
    const { title, content, date } = this.state;
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
        <div className="card-content">
          <p className="title">Title</p>
          <p className="date">13 Jan 2023</p>
          <p className="content">Content Notes</p>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.user,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPi(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
