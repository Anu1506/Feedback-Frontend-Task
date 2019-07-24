import React, { Component } from 'react';
import './App.css';
import bulb from './image/bulb.png';
import thumb1 from './image/thumb1.png';
import thumb2 from './image/thumb2.png';
import arrow from './image/arrow.png';
import rose from './image/rose.jpg';
import purple from './image/purple.jpg';
import Giftbutton from "./giftbutton";
import Image from "./Image";
import Feedback from "./Feedback";
import { createBrowserHistory } from 'history';
class Secondpage extends Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this);
        this.state =
            {
                selectedOption: '',
            }
    }

    goBack() {
        this.props.history.goBack();
    }

    _handleClick() {
        this.props.history.push('/Feedback')
        console.log("Submitted");
    }
    handleOnClick = (e) => {
        const elementId = e.target.getAttribute('id');
        this.setState({
            activeButton: elementId,
            bgColor: 'gray',
            selectedOption: elementId
        });


    }

    isButtonActive(buttonId) {
        return this.state.activeButton === buttonId;
    }



    render() {
        var optionButtonClasses = "circle";
        console.log(this.state.activeButton);

        return (
            <div className="container">

                <div className="header">
                    <h4>Header</h4>

                    <div className="tip-bar"> <img className="bulb" src={bulb} alt="bulb" onClick={this.tip}></img>
                        <p>Tip</p>
                    </div>
                </div>

                <div>
                    <hr />
                </div>


                <div className="progress-bar">
                    <div className="improvement">

                    </div>

                </div>



                <div className="detail-box">

                    <div className="view">

                        <img className="arrow" src={arrow} alt="arrow" onClick={this.goBack}></img>
                        <h3 className="heading">How was your gift?</h3>

                        <p className="font">We will improve our product quality based on ratings.</p>

                        <div className="review-box">
                            <div className={this.isButtonActive("gift") ? optionButtonClasses + " active " : optionButtonClasses} onClick={this.handleOnClick} id="gift">
                                <img className="thumb" src={thumb1} id="gift" />

                            </div>

                            <div className="circle" id="circle4">
                                <img className="thumb" src={thumb2} />

                            </div>
                        </div>
                        {
                            this.isButtonActive("gift") ?
                                <div className="dislike">
                                    <div className="hr">
                                        <hr />
                                    </div>
                                    <p className="font">Select the gift you didn't like</p>

                                    <div className="giftwrapper">
                                        <div className="giftbox">
                                            <img className="addproduct" src={rose}></img>
                                            <p className="textsize">True<br />Soulmate</p>
                                            <div className="add"></div>

                                        </div>
                                        <Giftbutton />
                                    </div>
                                    <div className="giftwrapper bottom ">
                                        <div className="giftbox">
                                            <img className="addproduct" src={purple}></img>
                                            <p className="textsize">Pretty<br />Pink</p>

                                            <div className="add"></div>

                                        </div>
                                        <Giftbutton />
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
                {

                    this.isButtonActive("gift") ?
                        <div className="feedback">
                            <a href="#" onClick={this._handleClick.bind(this)}>Leave more feedback</a>

                        </div>
                        : null}
                <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} id="submit1">Submit & Continue</button>
            </div>
        );
    }
}
export default Secondpage;
