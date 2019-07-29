import React, { Component } from 'react';
import '../asset/Style.css';
import logo from '../asset/img/logo.png';
import bulb from '../asset/img/bulb.png';
import thumb1 from '../asset/img/thumb1.png';
import thumb2 from '../asset/img/thumb2.png';
import arrow from '../asset/img/arrow.png';
import backgrd from '../asset/img/backgrd.png';
import Product from '../Component/Product';
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
        this.props.history.push('/Product')
        console.log("Submitted");
    }
    handleOnClick = (e) => {
        const elementId = e.target.getAttribute('id');
        this.setState({
            activeButton: elementId,
            backgroundColor: 'green',
            selectedOption: elementId
        });


    }

    isButtonActive(buttonId) {
        return this.state.activeButton === buttonId;
    }



    render() {
        var optionButtonClasses = "circle first";
        console.log(this.state.activeButton);

        return (
            <div className="container">
                <img className="Group-img"src={backgrd} alt="backgrd" ></img>
                <div className="header">
                    <img className="arrow" src={arrow} alt="arrow" onClick={this.goBack}></img>
                    <img className="logo" src={logo} alt="logo" ></img>

                    <div className="tip-bar"> <img className="bulb" src={bulb} alt="bulb" onClick={this.tip}></img>
                        <p>Tip</p>
                    </div >
                    <p className="heading">Hey Amit,<br /><br />
                        How was the quality of gift you <br />have receieved?
                </p>


                </div>


                <div className="progress-bar">


                </div>





                <div className="detail-box">






                    <p className="font">We will improve our product quality based on  your rating and feedback</p>

                    <div className="review-box">
                        <div className={this.isButtonActive("gift") ? optionButtonClasses + " active " : optionButtonClasses} onClick={this.handleOnClick} id="gift">
                            <img className="thumb" src={thumb1} id="gift" />

                        </div>

                        <div className="circle" id="circle4" onClick={this._handleClick.bind(this)}>
                            <img className="thumb" src={thumb2} />

                        </div>
                    </div>
                    </div>

                    <div className="progress-bar">


                    
                 </div>
                    <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} id="submit1">Continue</button>
                </div>
                );
            }
        }
        export default Secondpage;
