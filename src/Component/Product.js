import React, { Component } from "react";
import "../asset/Style.css";
import logo from "../asset/img/logo.png";
import bulb from "../asset/img/bulb.png";
import thumb1 from "../asset/img/thumb1.png";
import thumb2 from "../asset/img/thumb2.png";
import arrow from "../asset/img/arrow.png";
import backgrd from "../asset/img/backgrd.png";
import forward from "../asset/img/forward.png";
import Giftbutton from "../Component/Giftbutton";
import Project from "../Configure/Project";
import axios from "axios";
import Feedback from "../Component/Feedback";
let dislikeImproveData = [];
class Product extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      toggle: false,
      toggle2: false,
      toggle3: false,
      selectedOption: "",
      isLoaded: false,
      isOpened: false,
      products: [],
      prodPost: [],
      btns: [],
      dislike: 2,
      selectedButton: "",
      selectedBtnId: "",
      selectedProductId: "",
      like: 1
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  tip = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  btnOnClick = (e, prod) => {
    const elementId = e.target.getAttribute("id");
    fetch(
      Project.apiBaseUrl +
        "order-product-list/" +
        localStorage.getItem("order_id")
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            activeButton: elementId,
            backgroundColor: "green",
            selectedOption: elementId,
            isLoaded: true,
            products: result.data
          });
        },
        error => {
          console.log("errr");

          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  toggleBox = (product_id, elem) => {
    this.setState(oldState => ({ selectedProductId: product_id }));
    let self = this;
    axios({
      method: "post",
      url: Project.apiBaseUrl + "product-comments-list/",
      data: {
        product_type: 1,
        product_category: 1,
        status: this.state.dislike
      }
    })
      .then(function(response) {
        if (response.data) {
          self.setState({ isLoaded: true, btns: response.data.data });
        }
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  feedback = () => {
    this.setState({ toggle2: !this.state.toggle2 });
  };

  goBack() {
    this.props.history.goBack();
  }

  buttonClick = btn => {
    this.setState({
      selectedButton: btn.name,
      selectedBtnId: btn.id
    });
    let data = {
      order_id: localStorage.getItem("order_id"),
      product_id: this.state.selectedProductId,
      comment_id: this.state.selectedBtnId,
      user_id: "0",
      feedback_by: "2",
      rating: "0",
      status: this.state.dislike
    };
    dislikeImproveData.push(data);
  };

  isButtonActive(buttonId) {
    return this.state.activeButton === buttonId;
  }
  handleSubmit = () => {
    axios({
      method: "post",
      url: Project.apiBaseUrl + "save-order-product-feedback/",
      data: {
        prodPost: dislikeImproveData
      }
    })
      .then(response => {
        this.props.history.push("/Thankyou");
      })

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    var optionButtonClasses = "circle first";

    return (
      <div className="container">
        <img className="Group-img" src={backgrd} alt="backgrd" />
        <div className="header">
          <img
            className="arrow"
            src={arrow}
            alt="arrow"
            onClick={this.goBack}
          />
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
            How was the quality of gift you <br />
            have receieved?
          </p>
          <p className="font">
            We will improve our product quality based <br />
            on your rating and feedback
          </p>

          <div className="review-box">
            <div
              className={
                this.isButtonActive("btn1")
                  ? optionButtonClasses + " active"
                  : optionButtonClasses
              }
              onClick={this.btnOnClick}
              id="btn1"
            >
              {this.state.loading ? <div className="loader" /> : null}
              <img className="thumb" src={thumb1} id="btn1" alt="thumb1" />
            </div>

            <div
              className="circle"
              onClick={this.btnOnClick}
              id="btn2"
              className={
                this.isButtonActive("btn2")
                  ? optionButtonClasses + " active"
                  : optionButtonClasses
              }
            >
              <img className="thumb" src={thumb2} id="btn2" alt="thumb2" />
            </div>
          </div>
        </div>
        <div className="progress-bar" />
        {this.isButtonActive("btn2")
          ? this.state.products.map(prod => (
              <div
                className="giftwrapper"
                key={prod.product_id}
                onClick={() => this.toggleBox(prod.product_id)}
              >
                <div className="giftbox">
                  <img className="addproduct" src={prod.image} alt="product" />
                  <div>
                    <p className="textsize">{prod.title}</p>

                    <p className="delivered">Delivered on:01 july 2019</p>
                  </div>
                </div>
                <img
                  className="add"
                  src={forward}
                  alt="forward"
                  onClick={this.toggleBox}
                />

                {this.state.selectedProductId === prod.product_id ? (
                  <div className="gift-view">
                    <div className="hrline2" />
                    <p className="font-btn">Where we can improve?</p>

                    {this.state.btns.map((btn, index) => (
                      <Giftbutton
                        key={index}
                        name={btn.name}
                        btnselected={btn.selectedBtnId}
                        a={() => this.buttonClick(btn)}
                      />
                    ))}
                  </div>
                ) : null}

                <div className="hrline1" />
              </div>
            ))
          : null}

        <div className="feedback">
          <a href="!#" className="link-col" onClick={this.feedback}>
            Leave more feedback
          </a>
        </div>
        <div className="progress-bar1" />
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

        {this.state.toggle2 ? (
          <div
            className="overlay-box"
            onClick={() => this.setState({ toggle2: false })}
          />
        ) : null}
        {this.state.toggle2 ? <Feedback /> : null}

        <button
          className={
            this.state.selectedOption.length > 0
              ? "submit-btn1 btnactive"
              : "submit-btn1"
          }
          onClick={this.handleSubmit}
          id="submit1"
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Product;
