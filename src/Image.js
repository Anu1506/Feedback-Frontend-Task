import React, { Component } from 'react';
import './App.css';
import edit from './image/edit.png';

class Image extends Component {
   /* constructor(props) {
        super(props);
        this.state = {

            toggle1: false,
        

        }
        img = () => {
            this.setState({ toggle1: !this.state.toggle1});
    
        }    
    } */

    render() {

        return (
            /*{
                this.state.toggle1 ?
                    <div className="overlay-box"></div>
                    : null
            } */
            
            
                <div className="edit-image">
                    <p className="text-right closediv">Close</p>
                    <p className="text-left">Pretty Pink</p>
                    <div className="edit-box">

                        <img className="pen" src={edit}></img>

                    </div>
                </div>
            
        
        );
    }
}
export default Image;