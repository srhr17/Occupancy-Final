//import Blank from './';
import React from "react";
import css from "./css.css";
class Feature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        
           r1:"",y0:"",sem0:"",
        
      errors: {
         r1:"",y0:"",sem0:""
      },
   
     fields2: {},
 
     errors2: {},

     fields3: {},
   
     errors3: {}
 
 };
}



   
handleChange1 = e => {
   const { name, value } = e.target;
   let errors = this.state.errors;
   switch (name) {
     
     case "r1":
       errors.r1 = value === " " ? "Select room" : "";
       break;

     case "y0":
       errors.y0 = value === " " ? "Select year" : "";
       break;
     
       

     default:
       break;
   }

   this.setState({ errors, [name]: value });
 };




handleValidation2(){
    let fields2 = this.state.fields2;
    let errors2 = {};
    let formIsValid2 = true;
  

    if(!fields2["r2"]){
       formIsValid2 = false;
       errors2["r2"] = "Cannot be empty";
    }

    if(!fields2["y1"]){
        formIsValid2 = false;
        errors2["y1"] = "Cannot be empty";
     }

     if(!fields2["ac1"] || !fields2["skt1"]|| !fields2["mb1"]|| !fields2["sb1"]|| !fields2["mic1"]
     || !fields2["prj1"]){
         formIsValid2 = false;
         alert("Please enter all class hours details");
      }



     


   this.setState({errors2: errors2});
   return formIsValid2;
}


contactSubmit2(e){

    if(this.handleValidation2()){
       alert("Form submitted");
    }else{
       alert("Form has errors.");
       
    e.preventDefault();
    }

}
handleChange2(field, e){         
    let fields2 = this.state.fields2;
    fields2[field] = e.target.value;        
    this.setState({fields2});
}


handleValidation3(){
    let fields3 = this.state.fields3;
    let errors3 = {};
    let formIsValid3 = true;
   

    
    if(!fields3["r3"]){
       formIsValid3 = false;
       errors3["r3"] = "Cannot be empty";
    }

  

     if(!fields3["ac2"] || !fields3["skt2"]|| !fields3["mb2"]|| !fields3["sb2"]|| !fields3["mic2"]
     || !fields3["prj2"]){
         formIsValid3 = false;
         alert("Please enter all class hours details");
      }


    
      
    
   this.setState({errors3: errors3});
   return formIsValid3;
}


contactSubmit3(e){

    if(this.handleValidation2()){
       alert("Form submitted");
    }else{
       alert("Form has errors.");
       
    e.preventDefault();
    }

}
handleChange3(field, e){         
    let fields3 = this.state.fields3;
    fields3[field] = e.target.value;        
    this.setState({fields3});
}

  render(props) {
    return (
        <div class="form"><table><tr>
        <div className="container1"><fieldset>
      <form action="http://localhost:8000/Viewfeat" target="_blank" method="POST">
       
          <legend>
            <span className="number">1</span> VIEW ROOM FEATURES
          </legend><br></br>
         
         
          Room no *:
          <select id="lang" name="r1" onChange={this.handleChange1} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value="select">Select a ROOM</option>
          
          <option value ="A303">A303</option>
          <option value ="C303">C303</option>
          <option value ="A304">A304</option>
          <option value ="C103">C103</option>
          <option value ="A102">A102</option>
		  
          <option value ="A103">A103</option>
          
          
          <option value ="D303">D303</option>
          <option value ="D203">D203</option>
		  
          <option value ="D103">D103</option>
		  
            </select><br/>
         
         <span style={{color: "red"}}>{this.state.errors["r1"]}</span> <br/>
         
          Year *:
         
          <select id="lang" name="y0" onChange={this.handleChange1}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
         <span style={{color: "red"}}>{this.state.errors["y0"]}</span> <br/>
         
         
         
          <button style={{borderRadius: '50px', width: '300px',backgroundColor:' rgb(107, 180, 107)'} } data-testid = "submitbutton" onClick="">VIEW</button>
       
      </form>  </fieldset>
     
      </div>
      </tr><tr>
      <div className="container2"><fieldset>
      <form action="http://localhost:8000/Insert" method="POST">
      <legend>
            <span className="number">2</span>INSERT  FEATURES TO ROOM 
          </legend><br></br>
       
         
          Room no *:
      
        
          <input type="text" name="r2" placeholder="Room no *" onChange={this.handleChange2.bind(this, "r2")}/>
          <span style={{color: "red"}}>{this.state.errors2["r2"]}</span> <br/>
         
          Year *:
         
          <select id="lang" name="y1" onChange={this.handleChange2.bind(this, "y1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
         
        
          
          <h4>Features</h4>
         
        
          
          AC *:
          <select id="lang" name="ac1" onChange={this.handleChange2.bind(this, "ac1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select yes/no</option>
          <option value ="YES">YES</option>
          <option value ="NO">NO</option>
          
        </select><br/><br/>
         PROJ *:
          <select id="lang" name="proj1" onChange={this.handleChange2.bind(this, "proj1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select yes/no</option>
          <option value ="YES">YES</option>
          <option value ="NO">NO</option>
        </select><br/><br/>
          MARKER BOARD *:
          <select id="lang" name="mb1" onChange={this.handleChange2.bind(this, "mb1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select yes/no</option>
          <option value ="YES">YES</option>
          <option value ="NO">NO</option>
        </select><br/><br/>
          SOCKET PER EACH BENCH *:
          <select id="lang" name="skt1" onChange={this.handleChange2.bind(this, "skt1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select yes/no</option>
          <option value ="YES">YES</option>
          <option value ="NO">NO</option>
        </select><br/><br/>
          SOUND BOX *:
          <select id="lang" name="sb1" onChange={this.handleChange2.bind(this, "sb1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select yes/no</option>
          <option value ="YES">YES</option>
          <option value ="NO">NO</option>
          
        </select><br/> <br/>
        MIC *:
          <select id="lang" name="mic1" onChange={this.handleChange2.bind(this, "mic1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select yes/no</option>
          <option value ="YES">YES</option>
          <option value ="NO">NO</option>
          
        </select><br/><br/>
         
        <input type="submit" Value="INSERT" />
      </form> </fieldset>
      </div></tr>
      <tr>
      <div className="container3"> <fieldset>
      <form action="http://localhost:8000/Modify" method="POST">
      <legend>
            <span className="number">3</span>MODIFY FEATURES OF ROOM 
          </legend><br></br>
            
          
          Room no *:
      
        
          <input type="text" name="r3" placeholder="Room no *" onChange={this.handleChange3.bind(this, "r2")}/>
          <span style={{color: "red"}}>{this.state.errors3["r3"]}</span> <br/>
         
          
         
          Year *:
          <select id="lang" name="y2" onChange={this.handleChange3.bind(this, "y2")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
         
         <span style={{color: "red"}}>{this.state.errors3["y2"]}</span> <br/>
         
          
          <h4>Features</h4>
         
         
         AC *:
         <select id="lang" name="ac2" onChange={this.handleChange3.bind(this, "ac2")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         <option value="select">Select yes/no</option>
         <option value ="YES">YES</option>
         <option value ="NO">NO</option>
         
       </select><br/><br/>
        PROJ *:
         <select id="lang" name="proj2" onChange={this.handleChange3.bind(this, "proj2")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         <option value="select">Select yes/no</option>
         <option value ="YES">YES</option>
         <option value ="NO">NO</option>
       </select><br/><br/>
         MARKER BOARD *:
         <select id="lang" name="mb2" onChange={this.handleChange3.bind(this, "mb2")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         <option value="select">Select yes/no</option>
         <option value ="YES">YES</option>
         <option value ="NO">NO</option>
       </select><br/><br/>
         SOCKET PER EACH BENCH *:
         <select id="lang" name="skt2" onChange={this.handleChange3.bind(this, "skt2")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         <option value="select">Select yes/no</option>
         <option value ="YES">YES</option>
         <option value ="NO">NO</option>
       </select><br/><br/>
         SOUND BOX *:
         <select id="lang" name="sb2" onChange={this.handleChange3.bind(this, "sb2")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         <option value="select">Select yes/no</option>
         <option value ="YES">YES</option>
         <option value ="NO">NO</option>
         
       </select><br/> <br/>
       MIC *:
         <select id="lang" name="mic2" onChange={this.handleChange3.bind(this, "mic2")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         <option value="select">Select yes/no</option>
         <option value ="YES">YES</option>
         <option value ="NO">NO</option>
         
       </select><br/><br/>
        <input type="submit"Value="MODIFY" />
      </form>  </fieldset>
      </div>
      </tr>
      </table>
      </div>
      
    );
  }
}

export default Feature;
