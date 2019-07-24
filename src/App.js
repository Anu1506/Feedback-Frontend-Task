import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import bulb from './image/bulb.png';
import thumb1 from './image/thumb1.png';
import thumb2 from './image/thumb2.png';
import Secondpage from "./Secondpage";



function Index() {
    return <h2>Home</h2>;
}



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

            toggle: false,
            selectedOption: '',

        }
    }
    _handleOnClick = (e) => {
        const elementId = e.target.getAttribute('id');
        this.setState({
            activeButton: elementId,
            bgColor: 'gray',
            selectedOption: elementId
        });


    }

    tip = () => {
        this.setState({ toggle: !this.state.toggle });

    }




    _isButtonActive(buttonId) {
        return this.state.activeButton === buttonId;
    }


    _handleSubmit() {
        this.props.history.push('/Secondpage')
        console.log("Submitted");
    }


    render() {
        var optionButtonClasses = "circle";
        console.log(this.state.activeButton);


        // var OnSubmitTest = React.createClass({

        //     submit: function (e) {
        //         e.preventDefault();
        //         alert('it works!');
        //     }
        // });


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

                    <div className="one">

                        <h3 className="heading">Hey Amit,<br />How was your gift receiving<br />experience?
                </h3>

                        <p className="font" >Your feedback helps in improving the
                  delivery experience</p>


                        <div className="review-box">
                            <div className={this._isButtonActive("dislike") ? optionButtonClasses + " active" : optionButtonClasses} onClick={this._handleOnClick} id="dislike"
                  /* style={this.state.activeButton == "dislike" ? {backgroundColor:this.state.bgColor}: {}}>*/>
                                <img className="thumb" src={thumb1} id="dislike" />

                            </div>

                            <div className="circle" onClick={this._handleOnClick} id="like" className={this._isButtonActive("like") ? optionButtonClasses + " active" : optionButtonClasses}
                  /*style={this.state.activeButton == "like" ? {backgroundColor:this.state.bgColor}: {}}>*/>

                                <img className="thumb" src={thumb2} id="like" />
                            </div>
                        </div>
                        {
                            this._isButtonActive("dislike") ?

                                <div className="dislike-buttons" id="dis-btn">
                                    < button>Unprofessional</button>
                                    <button>Rider Communication</button>
                                    <button className="margin">Behaviour</button>
                                </div>
                                : null
                        }

                        {
                            this._isButtonActive("like") ?

                                <div className="like-buttons">
                                    <button className="btn inactive">Good</button>
                                    <button className="btn inactive">Best</button>
                                    <button className="btn inactive" className="margin">Average</button>
                                </div>


                                : null
                        }
                        {
                            this.state.toggle ?

                                <div className="overlay-box" onClick={() => this.setState({toggle: false})}>

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




                    </div>

                </div>
                <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} onClick={this._handleSubmit.bind(this)} id="submit">Submit & Continue</button>
            </div >

        );

    }
}



export default App;


