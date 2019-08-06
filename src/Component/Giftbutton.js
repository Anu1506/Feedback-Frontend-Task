import React, { Component } from "react";
import "../asset/Style.css";
class Giftbutton extends Component {
  render() {
    return (
      <div className="gift-button">
        <button
          className={
            this.props.btn.name === this.state.selectedButton ? "Btn1" : "Btn2"
          }
          onClick={() => this.props.buttonClick(this.props.btn.name)}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Giftbutton;
