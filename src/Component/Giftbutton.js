import React, { Component } from "react";
import "../asset/Style.css";
let activeId = [];
class Giftbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStatus: "giftbtngreen"
    };
  }
  componentWillUpdate(prevProps) {
    if (this.props.btnselected && this.props.activeButton) {
      activeId.push({ btnselected: this.props.btnselected });
    }
  }

  render() {
    return (
      <div className="gift-button">
        <button
          className={this.state.activeStatus}
          onClick={() => this.props.a(this.props.name)}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Giftbutton;
