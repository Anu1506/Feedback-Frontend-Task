import React, { Component } from 'react';
import '../asset/Style.css';
import cross from '../asset/img/cross.png';
import Product from '../Component/Product';
class Feedback extends Component {
            
    
    render() {
        return (
            
        <div className="More-Feedback">
            
            
            <div>
            
                <img className="cross" src={cross} onClick={() => this.setState({ toggle2: false })}/>
            </div>
            
       
        <h2 className="More-heading">More Comments</h2>
        <textarea className="feedback-para" Placeholder="Write your comment"></textarea>
        
        <button className="done-btn">SAVE</button>
    </div>
            );
        }
    } 
    export default Feedback;                   