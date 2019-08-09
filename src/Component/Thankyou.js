import React, { Component } from "react";
import "../asset/Style.css";
import path from "../asset/img/path.png";
import Product from "../Component/Product";
class Thankyou extends Component {
  render() {
    return (
      <div className="container">
        <div className="overlay-box" />

        <Product />
        <div className="More-Feedback">
          <div className="rectangle">
            <img className="path" src={path} alt="path" />
          </div>

          <h2 className="More-heading">Thank You</h2>
          <p className="Thanks-text">
            Thanks for sharing your feedback.
            <br />
            We are trying to give you best gifting experience.
            <br />
            Keep shoping with us!
          </p>
          <div className="feedback">
            <a href="https://www.floweraura.com/" className="link-col">
              Shop More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Thankyou;
