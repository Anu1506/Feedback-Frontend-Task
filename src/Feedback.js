import React, { Component } from 'react';
import './App.css';
import cross from './image/cross.png';

class Feedback extends Component {
            constructor(props) {
            super(props);
            this.goBack = this.goBack.bind(this);
        }
        goBack() {
            this.props.history.goBack();
        }
    
    render() {
        return (
            <div className="feedback-container">
        <div className="feedback-header">
            <div>
                <img className="cross" src={cross} onClick={this.goBack}/>
            </div>
        </div>
        <div>
            <hr />
        </div>
        <textarea className="feedback-para" Placeholder="Write Your Feedback Here"></textarea>
        
        <button className="done-btn">Done</button>
    </div>
            );
        }
    } 
    export default Feedback;                   