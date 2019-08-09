import React, { Component } from "react";
import "../asset/Style.css";
class Giftbutton extends Component {
  render() {
    return (
      <div className="gift-button">
        <button
          className={
            this.props.name === this.props.btnselected ? "Btn1" : "Btn2"
          }
          onClick={() => this.props.a(this.props.name)}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Giftbutton;
