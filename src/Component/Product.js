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
import axios from 'axios';
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
                products:[],
                btns:[],
                dislike:1,
                like:2,
                
                
            }
            this.toggleBox = this.toggleBox.bind(this);
    }

    tip = () => {
        this.setState({ toggle: !this.state.toggle });

    }
    btnOnClick = (e) => {
        const elementId = e.target.getAttribute('id');
        fetch("http://localhost:5000/api/order-product-list/1376")
            .then(

                res => res.json()
            )
            .then(

                (result) => {
                    console.log(JSON.stringify(result, "res"))
                    this.setState({
                        activeButton: elementId,
                        backgroundColor: 'green',
                        selectedOption: elementId,
                        isLoaded: true,
                        products: result.data
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
   



    toggleBox=() => {
    this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    fetch("http://localhost:5000/api/product-comments-list/2")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          btns: result.data
        });
      },
      
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

    feedback = () => {
        this.setState({ toggle2: !this.state.toggle2 });

    }

    goBack() {
        this.props.history.goBack();
    }
    

    isButtonActive(buttonId) {
        return this.state.activeButton === buttonId;
    }
    handleSubmit() {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/save-order-product-feedback',
            data: {
                order_id: '10',
                product_id:'1',
                comment_id: 1,
                user_id: '0',
                feedback_by: '2',
                rating: '0',
                feedback:'',
                status: '2',
                image_path:''   
            }
        })        
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        
    }

i
    render() {
        var optionButtonClasses = "circle first";
        console.log(this.state.activeButton);
        const { isOpened } = this.state;
        // console.log(this.state.items);
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
                        <div className={this.isButtonActive("btn1") ? optionButtonClasses +" active" : optionButtonClasses} onClick={this.btnOnClick}  id="btn1" >
                            <img className="thumb" src={thumb1} id="btn1" />

                        </div>

                        <div className="circle" onClick={this.btnOnClick} id="btn2" className={this.isButtonActive("btn2") ? optionButtonClasses + " active" : optionButtonClasses}>
                            <img className="thumb" src={thumb2} id="btn2"/>

                        </div>
                    </div>


                </div>
                <div className="progress-bar"></div>
                {
                            this.isButtonActive("btn2") ?
                            (this.state.products.map((product) => (
                 <div className="giftwrapper">
                
                
                    <div className="giftbox">
                        <img className="addproduct" src={product.image}></img>
                        <div >
                        <p className="textsize">{product.title}</p>
                      
                        <p className="delivered">Delivered on:01 july 2019</p>
                        </div>
                      </div>
                  <img className="add" src={forward} alt="forward" onClick={this.toggleBox}></img>
                  { this.state.isOpened ?
                <div className="gift-view">
                <div class="hrline2"></div> 
               <p className="font-btn">Where we can improve?</p>

                {this.state.btns.map((btn) => (
                <Giftbutton name={btn.name}/>
                 ))}

                
           

            
            
               </div>
                :null}
                       
                    
                    
                  
                <div class="hrline1"></div> 
            
                </div>
                )))
                  : null }
               
                
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

                
                <button className={this.state.selectedOption.length > 0 ? "submit-btn1 btnactive" : "submit-btn1"} onClick={this.handleSubmit} id="submit1">Submit</button>
            </div>

        );
    }
}
export default Product;