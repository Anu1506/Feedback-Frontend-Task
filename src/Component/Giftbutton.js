import React, { Component } from 'react';
import '../asset/Style.css';
import downward from '../asset/img/downward.png';
class Giftbutton extends Component {
 
    render() {
        return (
            
            <div className="gift-view">
           <img className="addchange"src={downward} alt="downward" onClick={this.toggleBox}></img>
            <p className="font-btn">Where we can improve?</p>


            <div className="gift-button">
                <button >Fresh Flower</button>
                <button >Presentation</button>
                <button >Taste</button>

            </div>
            <div class="hrline2"></div> 
           

            
            
        </div>
        );
    }
} 
export default Giftbutton;       