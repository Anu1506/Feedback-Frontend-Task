import React, { Component } from 'react';
import '../asset/Style.css';
class Giftbutton extends Component {
    
    
  
    render() {
        return (
             
            

           
            <div className="gift-button">
                <button >{this.props.name}</button>
            </div>
        
            
        );
    }
} 
export default Giftbutton;       