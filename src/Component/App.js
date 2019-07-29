import qs from 'querystring';
import React, { Component } from 'react';
import '../asset/Style.css';
import { createBrowserHistory } from 'history';
import logo from '../asset/img/logo.png';
import bulb from '../asset/img/bulb.png';
import backgrd from '../asset/img/backgrd.png';
import thumb1 from '../asset/img/thumb1.png';
import thumb2 from '../asset/img/thumb2.png';
import Secondpage from '../Component/Secondpage';
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
            comment_id:'',
            
            
        
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
                        backgroundColor: 'green',
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
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/save-order-feedback',
            data: {
                order_id: '2',
                comment_id: 1,
                user_id: '0',
                feedback_by: '2',
                rating: '0',
                status: this.state.dislike,
                feedback: ""
            }
        })        
                .then(response => {
                    console.log(this.props.history.push('/Secondpage'))
                })
                .catch(error => {
                    console.log(error)
                })
        
    }
    
   

    render() {
        console.log(this.props.location.search)
        var optionButtonClasses = "circle first";
        console.log(this.state.activeButton);
        let animationClasses = (this.state.animate ? ' active': '');
       

       
        return (



            <div className="container" >
                <img className="Group-img"src={backgrd} alt="backgrd" ></img>
                <div className="header">
               
               
                <img className="logo"src={logo} alt="logo" ></img>

                    <div className="tip-bar"> <img className="bulb" src={bulb} alt="bulb" onClick={this.tip}></img>
                        <p>Tip</p>
                    </div>
                    <p className="heading">Hey Amit,<br /><br/>How was your gift receiving experience?
                </p>

                           
                </div>

                <div class="progress-bar"></div>


                <div className="detail-box">

                
                <p className="font" >Your feedback is important for us to serve you best and exciting gift experience
                  delivery experience</p>  
                 <div className="review-box">
                            <div   className={this._isButtonActive("dislike") ? optionButtonClasses +" active" : optionButtonClasses} onClick={this._handleOnClick} id="dislike123">
               
                                <img className="thumb" src={thumb1} id="dislike" />

                            </div>
                            <div className="circle" onClick={this._handleOnClick} id="like" className={this._isButtonActive("like") ? optionButtonClasses + " active" : optionButtonClasses}>
                  

                                <img className="thumb" src={thumb2} id="like" />
                            </div>
                        </div>
                        {
                            this._isButtonActive("dislike") ?


                                   <div className= "dislike-buttons ">
                                        <div class="line"></div>
                                     
                                    {this.state.items.map((item) => (
                                       
                                        < button className=" ml" onClick={this.btnClick} 
                                        >{item.name}</button>
                                      
                                    
                                    ))
                                    }
                                </div>
                                : null
                        }

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




                    
                    <div class="progress-bar"></div>
                   
                
                <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} onClick={this._handleSubmit.bind(this)} id="submit"> Continue</button>
            </div>

        );

    }

}



export default App;


