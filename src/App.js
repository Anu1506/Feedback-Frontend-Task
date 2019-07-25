import qs from 'querystring';
import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import bulb from './image/bulb.png';
import thumb1 from './image/thumb1.png';
import thumb2 from './image/thumb2.png';
import Secondpage from "./Secondpage";
import axios from 'axios';


function Index() {
    return <h2>Home</h2>;
}



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

            toggle: false,
            toggle1:false,
            selectedOption: '',
            error: null,
            isLoaded: false,
            items: [],
            dislike:1,
            like:2,
            comment_id:''
            
        }
    }

    
    _handleOnClick = (e) => {
        const elementId = e.target.getAttribute('id');
        fetch("http://localhost:5000/api/order-comments-list/2")
            .then(

                res => res.json()
            )
            .then(

                (result) => {
                    console.log(JSON.stringify(result, "res"))
                    console.log('like')
                    this.setState({
                        activeButton: elementId,
                        bgColor: 'gray',
                        selectedOption: elementId,
                        isLoaded: true,
                        items: result.data
                    });
                },

                (error) => {
                    console.log('errr')
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )




    }
   

    tip = () => {
        this.setState({ toggle: !this.state.toggle });

    }
    btn = (id) => {
        this.setState({ toggle1: !this.state.toggle1,bgcolor:'gray' ,comment_id:id});

    }





    _isButtonActive(buttonId) {
        return this.state.activeButton === buttonId;
    }

   


    _handleSubmit() {
        console.log(document.url)
        const str = 'http://localhost:5000/api/order-comments-list/2';
        const res = str.split('/');
        console.log(res[res.length-1]);
        if(this.state.activeButton == '0')
        {
            console.log(this.state.dislike)
        }    
            else{
            console.log(this.state.like)

        }

        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...' 
        }


        axios.post(
            'http://localhost:5000/api/save-order-feedback',
            qs.stringify({
                order_id: '2',
                comment_id: this.state.comment_id,
                user_id: '0',
                feedback_by: '2',
                rating: '0',
                status: this.state.activeButton
            }), {headers: headers})

        
                .then(response => {
                    console.log(this.props.history.push('/Secondpage'))
                })
                .catch(error => {
                    console.log(error)
                })
        
    }
    // Collect data from state
    // prepare data according to api
    // Make an api call on http://localhost:5000/api/save-order-feedback
    // On success this.props.history.push('/Secondpage') 
    // On failure show the message 


    render() {
        console.log(this.props.location.search)
        var optionButtonClasses = "circle";
        console.log(this.state.activeButton);
       
        return (



            <div className="container" >

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
                            <div className={this._isButtonActive("dislike") ? optionButtonClasses + " active" : optionButtonClasses} onClick={this._handleOnClick} id="dislike123"
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


                                   <div className= "dislike-buttons">
                                    {this.state.items.map((item) => (
                                       
                                        < button onClick={()=>this.btn(item.id)}>{item.name}</button>
                                      
                                    
                                    ))
                                    }
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




                    </div>

                </div>
                <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} onClick={this._handleSubmit.bind(this)} id="submit">Submit & Continue</button>
            </div>

        );

    }

}



export default App;


