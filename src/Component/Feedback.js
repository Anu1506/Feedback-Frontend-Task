import React, { Component } from "react";
import "../asset/Style.css";
import cross from "../asset/img/cross.png";
import axios from "axios";
import Project from "../Configure/Project";
class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle2: false,
      comments: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ comments: event.target.value });
  };
  Save = () => {
    axios({
      method: "post",
      url: Project.apiBaseUrl + "save-order-feedback-comment",
      data: {
        order_id: 2,
        feedback: this.state.comments
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="More-Feedback">
        <div>
          <img
            className="cross"
            src={cross}
            onClick={() => this.setState({ toggle2: false })}
          />
        </div>
        <h2 className="More-heading">More Comments</h2>
        <textarea
          className="feedback-para"
          Placeholder="Write your comment"
          value={this.state.comments}
          onChange={this.handleChange}
        />
        <button className="done-btn" onClick={this.Save}>
          SAVE
        </button>
      </div>
    );
  }
}
export default Feedback;
