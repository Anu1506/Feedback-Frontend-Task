import React, { Component } from "react";
import "../asset/Style.css";
import { createBrowserHistory } from "history";
import logo from "../asset/img/logo.png";
import bulb from "../asset/img/bulb.png";
import backgrd from "../asset/img/backgrd.png";
import thumb1 from "../asset/img/thumb1.png";
import thumb2 from "../asset/img/thumb2.png";
import Product from "../Component/Product";
import Project from "../Configure/Project";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      toggle1: false,
      selectedOption: "",
      error: null,
      isLoaded: false,
      items: [],
      dislike: 1,
      like: 2,
      loading: false,
      selectedButton: "",
      open: true,
      comment_id: ""
    };
  }

  buttonClick = name => {
    this.setState({
      selectedButton: name
    });
  };
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getImageName = () => (this.state.open ? "thumb2" : "dislike");

  hideLoader = () => {
    this.setState({ loading: false });
  };

  showLoader = () => {
    this.setState({ loading: true });
  };

  _handleOnClick = e => {
    const elementId = e.target.getAttribute("id");
    const _this = this;
    this.showLoader();
    fetch(Project.apiBaseUrl + "order-comments-list/2")
      .then(res => res.json())
      .then(
        result => {
          this.setState(state => ({ open: !state.open }));

          toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT
          });
          console.log(JSON.stringify(result, "res"));
          console.log("like");
          this.hideLoader();
          this.toggleImage();
          this.setState({
            activeButton: elementId,
            backgroundColor: "green",
            selectedOption: elementId,
            isLoaded: true,
            items: result.data
          });
        },

        error => {
          console.log("errr");
          this.hideLoader();
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  tip = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  _isButtonActive(buttonId) {
    return this.state.activeButton === buttonId;
  }

  _handleSubmit = () => {
    const _this = this;
    this.showLoader();
    if (this.state.activeButton == "0") {
      console.log(this.state.dislike);
    } else {
      console.log(this.state.like);
    }
    axios({
      method: "post",
      url: Project.apiBaseUrl + "save-order-feedback",
      data: {
        order_id: "2",
        comment_id: 1,
        user_id: "0",
        feedback_by: "2",
        rating: "0",
        status: this.state.dislike,
        feedback: ""
      }
    })
      .then(response => {
        this.props.history.push("/Product");
        this.hideLoader();
      })
      .catch(error => {
        console.log(error);
        this.hideLoader();
      });
  };

  render() {
    const imageName = this.getImageName();
    console.log(this.props.location.search);
    var optionButtonClasses = "circle first";
    console.log(this.state.activeButton);
    let animationClasses = this.state.animate ? " active" : "";
    return (
      <div className="container">
        <ToastContainer
          enableMultiContainer
          containerId={"A"}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <img className="Group-img" src={backgrd} alt="backgrd" />
        <div className="header">
          <img className="logo" src={logo} alt="logo" />

          <div className="tip-bar">
            {" "}
            <img className="bulb" src={bulb} alt="bulb" onClick={this.tip} />
            <p>Tip</p>
          </div>
          <p className="heading">
            Hey,
            <br />
            <br />
            How was your gift receiving experience?
          </p>
        </div>

        <div class="progress-bar" />
        <div className="detail-box">
          <p className="font">
            Your feedback is important for us to serve you best and exciting
            gift experience delivery experience
          </p>
          <div className="review-box">
            <div
              className={
                this._isButtonActive("like")
                  ? optionButtonClasses + " active"
                  : optionButtonClasses
              }
              onClick={this._handleOnClick}
              id="like"
            >
              <img className="thumb" src={thumb1} id="like" />
            </div>
            <div
              className="circle"
              onClick={this._handleOnClick}
              id="dislike"
              className={
                this._isButtonActive("dislike")
                  ? optionButtonClasses + " active"
                  : optionButtonClasses
              }
            >
              {this.state.loading ? <div className="loader" /> : null}

              <img className="thumb" src={thumb2} id="dislike" />
            </div>
          </div>
          {this._isButtonActive("dislike") ? (
            <div>
              <div class="line" />

              {this.state.items.map(item => (
                <button
                  className={
                    item.name === this.state.selectedButton ? "Btn1" : "Btn2"
                  }
                  onClick={() => this.buttonClick(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        {this.state.toggle ? (
          <div
            className="overlay-box"
            onClick={() => this.setState({ toggle: false })}
          />
        ) : null}
        {this.state.toggle ? (
          <div class="description">
            <p>
              Help others make purchase decision-
              <br />
              <br />
              Write about your Service Experience:
              <br />
              Explain what you liked or disliked about the
              <br />
              services,did it meet your excpetence,was the <br />
              customer care helpful enough..
              <br />
              <br />
              Write about your Product Experience
              <br />
              How good was the product,was therecipient
              <br />
              happy with the quality?
            </p>
          </div>
        ) : null}

        <div class="progress-bar" />

        <button
          className={
            this.state.selectedOption.length > 0
              ? "submit-btn1 btnactive"
              : "submit-btn1"
          }
          onClick={this._handleSubmit.bind(this)}
          id="submit"
        >
          Continue
        </button>
      </div>
    );
  }
}

export default App;
