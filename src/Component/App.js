import React, { Component } from "react";
import "../asset/Style.css";
import logo from "../asset/img/logo.png";
import bulb from "../asset/img/bulb.png";
import backgrd from "../asset/img/backgrd.png";
import thumb1 from "../asset/img/thumb1.png";
import thumb2 from "../asset/img/thumb2.png";
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
      selectedButton: [],
      selectedBtndId: "",
      open: true,
      order: 2,
      buttonState: "Btn2"
    };
  }

  notifyA = () =>
    toast("Success !", { containerId: "A", position: "Top", duration: "500" });

  buttonClick = (item, index) => {
    console.log("item=====", item);
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

  hideLoader = () => {
    this.setState({ loading: false });
  };

  showLoader = () => {
    this.setState({ loading: true });
  };

  _handleOnClick = e => {
    const elementId = e.target.getAttribute("id");
    this.showLoader();
    if (elementId === "like") {
      var comment_type = 1;
      this.setState({ selecteBtndId: 0 });
    } else {
      comment_type = 2;
    }

    fetch(Project.apiBaseUrl + "order-comments-list/" + comment_type)
      .then(res => res.json())
      .then(
        result => {
          this.setState(state => ({ open: !state.open }));
          this.notifyA();
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
    const { id } = this.props.match.params;
    localStorage.setItem("order_id", id);
    this.showLoader();
    this.notifyA();

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
        comment_id: this.state.selectedBtndId,
        user_id: "0",
        feedback_by: "2",
        rating: "0",
        status: this.state.dislike
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
    console.log(this.props.location.search);
    let optionButtonClasses = "circle first";
    console.log(this.state.items);

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
              {this.state.loading ? <div className="loader" /> : null}

              <img className="thumb" src={thumb2} id="dislike" alt="thumb2" />
            </div>
          </div>
          {this._isButtonActive("dislike") ? (
            <div>
              <div className="line" />

              {this.state.items.map((item, index) => (
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
        {this.state.toggle ? (
          <div className="description">
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

        <div className="progress-bar" />

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
