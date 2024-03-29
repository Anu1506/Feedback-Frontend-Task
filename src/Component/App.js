import React, { Component } from "react";
import "../asset/Style.css";
import logo from "../asset/img/logo.png";
import bulb from "../asset/img/bulb.png";
import backgrd from "../asset/img/backgrd.png";
import thumb1 from "../asset/img/thumb1.png";
import thumb2 from "../asset/img/thumb2.png";
import dislike from "../asset/img/dislike.png";
import Help from "../Component/Help";
// import loader from "../asset/img/loader.gif";
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
      items: [],
      dislike: 1,
      like: 2,
      selectedButton: [],
      selectedBtndId: false,
      open: true,
      order: 2,
      buttonState: "Btn2",
      thumbshow: "true"
    };
  }

  DislikeImg = () => {
    this.setState({ thumbshow: !this.state.thumbshow });
  };

  toaster = msg =>
    toast(msg, { containerId: "A", position: "Top", duration: "500" });

  buttonClick = (item, index) => {
    this.setState(prevState => {
      return {
        items: prevState.items.map(data => {
          if (data.id === item.id) {
            return { ...data, is_active: !item.is_active };
          } else {
            return data;
          }
        }),
        selectedButton: item.name,
        selectedBtndId: this.state.selectedBtndId + item.id + ","
      };
    });
  };
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getImageName = () => (this.state.open ? "thumb2" : "dislike");
  _handleOnClick = e => {
    const elementId = e.target.getAttribute("id");
    this.DislikeImg();

    if (elementId === "like") {
      var comment_type = 1;
      this.setState({ selecteBtndId: 0 });
    } else {
      comment_type = 2;
    }

    fetch(Project.apiBaseUrl + "order-comments-list/" + comment_type)
      .then(res => res.json())
      .then(result => {
        if (result.status === 200 && result.data.length > 0) {
          this.setState(state => ({ open: !state.open }));
          this.toggleImage();
          this.setState({
            activeButton: elementId,
            backgroundColor: "green",
            selectedOption: elementId,
            isLoaded: true,
            items: result.data
          });
        } else {
          this.notifyA("Data not found !");
        }
      })

      .catch(error => {
        console.log("errr");
        this.toaster("Data not found !");
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  tip = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  _isButtonActive(buttonId) {
    return this.state.activeButton === buttonId;
  }

  _handleSubmit = () => {
    const { id } = this.props.match.params;
    localStorage.setItem("order_id", id);

    if (this.state.activeButton === "0") {
      console.log(this.state.dislike);
    } else {
      console.log(this.state.like);
    }
    axios({
      method: "post",
      url: Project.apiBaseUrl + "save-order-feedback",
      data: {
        order_id: localStorage.getItem("order_id"),
        comment_id:
          this.state.selectedBtndId === false ? "0" : this.state.selectedBtndId,
        user_id: "0",
        feedback_by: "2",
        rating: "0",
        status: this.state.dislike
      }
    })
      .then(response => {
        this.props.history.push("/Product");
      })
      .catch(error => {
        console.log(error);
        this.toaster(error);
      });
  };

  render() {
    let optionButtonClasses = "circle first";

    return (
      <div className="container">
        <ToastContainer
          enableMultiContainer
          containerId={"A"}
          position={toast.POSITION.TOP}
          duration={5000}
        />
        <img className="Group-img" src={backgrd} alt="backgrd" />
        <div className="header">
          <img className="logo" src={logo} alt="logo" />

          <div className="tip-bar">
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

        {this.state.loading ? <div className="loader" /> : null}
        <div className="progress-bar" />
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
              <img className="thumb" src={thumb1} id="like" alt="thumb1" />
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
              <img
                className="thumb"
                src={this.state.thumbshow ? thumb2 : dislike}
                id="dislike"
                alt="thumb2"
              />
            </div>
          </div>
          {this._isButtonActive("dislike") ? (
            <div>
              <div className="line" />

              {this.state.items &&
                this.state.items.map((item, index) => (
                  <button
                    key={index}
                    className={item.is_active ? "Btn1" : "Btn2"}
                    onClick={() => this.buttonClick(item)}
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
        {this.state.toggle ? <Help /> : null}

        <div className="progress-bar1" />

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
