import React, { Component } from 'react';
import '../asset/Style.css';
import logo from '../asset/img/logo.png';
import bulb from '../asset/img/bulb.png';
import thumb1 from '../asset/img/thumb1.png';
import thumb2 from '../asset/img/thumb2.png';
import arrow from '../asset/img/arrow.png';
import backgrd from '../asset/img/backgrd.png';
import rose from '../asset/img/rose.jpg';
import forward from '../asset/img/forward.png';
import Giftbutton from '../Component/Giftbutton';
import feedback from '../Component/Feedback';

import { createBrowserHistory } from 'history';
import Feedback from '../Component/Feedback';
class Product extends Component {

    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this);
        this.state =
            {    toggle:false,
                 toggle2:false,
                selectedOption: '',
                isOpened: false,
            }
            this.toggleBox = this.toggleBox.bind(this);
    }

    tip = () => {
        this.setState({ toggle: !this.state.toggle });

    }



    toggleBox=() => {
        this.setState(oldState => ({ isOpened: !oldState.isOpened }));
      }

    feedback = () => {
        this.setState({ toggle2: !this.state.toggle2 });

    }

    goBack() {
        this.props.history.goBack();
    }
    handleOnClick = (e) => {
        const elementId = e.target.getAttribute('id');
        this.setState({
            activeButton: elementId,
            bgcolor: 'gray',
            selectedOption: elementId
        });


    }

    isButtonActive(buttonId) {
        return this.state.activeButton === buttonId;
    }



    render() {
        var optionButtonClasses = "circle first";
        console.log(this.state.activeButton);
        const { isOpened } = this.state;

        return (
            <div className="container">
                <img className="Group-img"src={backgrd} alt="backgrd" ></img>
                <div className="header">
                    <img className="arrow" src={arrow} alt="arrow" onClick={this.goBack}></img>
                    <img className="logo" src={logo} alt="logo" ></img>

                    <div className="tip-bar"> <img className="bulb" src={bulb} alt="bulb" onClick={this.tip}></img>
                        <p>Tip</p>
                    </div >
                    <p className="font">We will improve our product quality based <br/>on  your rating and feedback</p>

                    <div className="review-box">
                        <div className={this.isButtonActive("gift") ? optionButtonClasses + " active " : optionButtonClasses} onClick={this.handleOnClick} id="gift">
                            <img className="thumb" src={thumb1} id="gift" />

                        </div>

                        <div className="circle" id="circle4" >
                            <img className="thumb" src={thumb2} />

                        </div>
                    </div>


                </div>
                <div className="progress-bar"></div>
                 <div className="giftwrapper">
                    <div className="giftbox">
                        <img className="addproduct" src={rose}></img>
                        <div >
                        <p className="textsize">True Soulmate</p>
                      
                        <p className="delivered">Delivered on:01 july 2019</p>
                        </div>
                      </div>
                        
                        <img className="add"src={forward} alt="forward" onClick={this.toggleBox}></img>
                        
                       
                    
                    
                </div>   
                <div class="hrline1"></div> 
                { this.state.isOpened ?
                <Giftbutton/>

                :null}
                <div class="feedback">
            <a href="#" className="link-col" onClick={this.feedback}>Leave more feedback</a>
                   </div>
                 <div className="progress-bar1">


                    
                 </div>
                 {
                            this.state.toggle ?

                                <div className="overlay-box" onClick={() => this.setState({ toggle: false })}>

                                </div>
                                : null
                        }
                        {
                            this.state.toggle ?
                                <div class="description">
                                    <p>Help others make purchase decision-<br /><br />Write about your Service Experience:<br />Explain what you liked or disliked about the<br />services,did it meet your excpetence,was the <br />customer care helpful
                                 enough..<br /><br />Write about your Product Experience<br />How good was the product,was therecipient<br />happy with the quality?</p>
                                </div>


                                : null
                        }  

{
                            this.state.toggle2 ?

                                <div className="overlay-box" onClick={() => this.setState({ toggle2: false })}>

                                </div>
                                : null
                        }
                        {
                            this.state.toggle2?
                            
                             <Feedback/>

                                : null
                        }      

                
                <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} id="submit1">Submit</button>
            </div>

        );
    }
}
export default Product;