import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import bulb from './image/bulb.png';
import thumb1 from './image/thumb1.png';
import thumb2 from'./image/thumb2.png';


  
class App extends Component{
    constructor(props){
        super(props)
this.state={
    toggle:false,
    toggle1:false,
    toggle2:false,
}
}
    _handleOnClick=() =>{
        this.setState({toggle:!this.state.toggle,toggle1:false
        });

    
    }

    abc=()=>{
        this.setState({toggle1:!this.state.toggle1,toggle:false});

    }

    tip=()=>{
        this.setState({toggle2:!this.state.toggle2});

    }
    
  
    
  render(){

    return(
      <div className="container">
      
      <div className="header">
          <h4>Header</h4>
           
          <div className="tip-bar"> <img className="bulb" src={bulb} alt="bulb"onClick={this.tip}></img>
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

          <h3 className="heading">Hey Amit,<br/>How was your gift receiving<br/>experience?
                </h3>

              <p className="font" >Your feedback helps in improving the
                  deliverey experience</p>


              <div className="review-box">
                  <div className="circle firstcircle" onClick={this._handleOnClick}>
                      <img className="thumb" src={thumb1}></img>  
                  </div>

                  <div className="circle" onClick={this.abc}>
                      <img className="thumb" src={thumb2}></img>
                  </div>
              </div>    
                  {
                      this.state.toggle ?  
                  
                 <div className="dislike-buttons" >
                    < button className="btn inactive">Unprofessional</button>
                    <button className="btn inactive">Rider Communication</button>
                    <button className="btn inactive" className="margin">Behaviour</button>
                </div>
                : null
                  }
                
                {
                      this.state.toggle1?  
                
                <div className="like-buttons">
                    <button className="btn inactive">Good</button>
                    <button className="btn inactive">Best</button>
                    <button className="btn inactive" className="margin">Average</button>
                </div>
                  : null
                }
                {
                      this.state.toggle2? 
                       
                <div className="overlay-box"></div>
                : null
                }
                {
                    this.state.toggle3? 
                <div class="description">
                <p>Help others make purchase decision-<br/><br/>Write about your Service Experience:<br/>Explain what you liked or disliked about the<br/>services,did it meet your excpetence,was the <br/>customer care helpful
                enough..<br/><br/>Write about your Product Experience<br/>How good was the product,was therecipient<br/>happy with the quality?</p>
               </div>
    
    
                : null
            }
          

          </div>

  </div>
  <button className="submit-btn1">Submit & Continue</button>
  </div>

);
    
 }
}




export default App;
