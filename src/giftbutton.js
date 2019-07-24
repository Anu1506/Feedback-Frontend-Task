import React, { Component } from 'react';
import './App.css';

class Giftbutton extends Component {
 
    render() {
        return (
            <div className="gift-view1">
            <div className="hr">
                <hr />
            </div>
            <p className="font">Where we can improve?</p>


            <div className="gift-button">
                <button >Fresh Flower</button>
                <button >Presentation</button>
                <button >Taste</button>

            </div>

           

            <div className="giftimage">
                <a href="#">Upload image</a>
            </div>
            
        </div>
        );
    }
} 
export default Giftbutton;       