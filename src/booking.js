//import Blank from './';
import React from "react";
//import css from "./css.css";
class Booking extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        
   
     fields1: {},
 
     errors1: {},

 };
}



   



handleChange1(field, e){         
    let fields1 = this.state.fields1;
    fields1[field] = e.target.value;        
    this.setState({fields1});
}


  render(props) {
    return (
        <div className="container1"  ><fieldset>
      <form action="http://localhost:7800/Approve" target="_blank" method="POST">
       
          <legend>
            <span className="number">1</span> VIEW ROOM BOOKING
          </legend><br></br>
         
         
          Room no *:
         
      
        
      <input type="text" name="roomno" placeholder="Room no*" onChange={this.handleChange1.bind(this, "roomno")}/>
     
         Day *:
      
        
      <input type="text" name="day" placeholder="Day*" onChange={this.handleChange1.bind(this, "day")}/>
      period *:
          <input type="text" name="per" placeholder="Period *" onChange={this.handleChange1.bind(this, "per")}/>
         
         
          <input type="submit" Value="Approve" />
               
      </form>  </fieldset>
     
      </div>
    );
  }
}

export default Booking;
