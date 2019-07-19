import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import bulb from './image/bulb.png';
import thumb1 from './image/thumb1.png';
import thumb2 from'./image/thumb2.png';


  
class App extends Component{
 
  render(){
    return(
      <div className="container">
      <div className="overlay-box"></div>
      <div className="header">
          <h4>Header</h4>
           
          <div className="tip-bar"> <img className="bulb" src={bulb} alt="bulb"></img>
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
                  <div className="circle firstcircle">
                      <img className="thumb" src={thumb1}></img>  
                  </div>

                  <div className="circle">
                      <img className="thumb" src={thumb2}></img>
                  </div>
              </div>

          </div>

  </div>
  <button className="submit-btn1">Submit & Continue</button>
  </div>

    )
    
  }
}



export default App;
