//import Blank from './';
import React from "react";

import css from './css.css';
class Faculty extends React.Component {
constructor(props){
    super(props);
    this.state={
        
      fid0:"",sem0:"",
      
       errors: {
          fid0:"",
          sem0:""
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
    
    case "fid0":
      errors.sec0 = value === " " ? "Select faculty name" : "";
      break;

    case "sem0":
      errors.sem0 = value === " " ? "Select sem" : "";
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
        if(!fields2["fid1"]){
           formIsValid2 = false;
           errors2["fid1"] = "Cannot be empty";
        }
    
        
        if(!fields2["y1"]){
            formIsValid2 = false;
            errors2["y1"] = "Cannot be empty";
         }
    
         if(!fields2["day1"]){
            formIsValid2 = false;
            errors2["day1"] = "Cannot be empty";
         }
         
         if(!fields2["fn1"]){
            formIsValid2 = false;
            errors2["fn1"] = "Cannot be empty";
         }
          
          
         if(!fields2["fh1"] || !fields2["sh1"]|| !fields2["th1"]|| !fields2["foh1"]|| !fields2["fih1"]
         || !fields2["sih1"]|| !fields2["seh1"]|| !fields2["eh1"]|| !fields2["nh1"]){
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

    //Name
    if(!fields3["sem2"]){
       formIsValid3 = false;
       errors3["sem2"] = "Cannot be empty";
    }

    

    if(!fields3["fid2"]){
       formIsValid3 = false;
       errors3["fid2"] = "Cannot be empty";
    }
     if(!fields3["day2"]){
      formIsValid3 = false;
      errors3["day2"] = "Cannot be empty";
   }

    if(!fields3["y2"]){
        formIsValid3 = false;
        errors3["y2"] = "Cannot be empty";
     }

     if(!fields3["fh2"] || !fields3["sh2"]|| !fields3["th2"]|| !fields3["foh2"]|| !fields3["fih2"]
     || !fields3["sih2"]|| !fields3["seh2"]|| !fields3["eh2"]|| !fields3["nh2"]){
         formIsValid3 = false;
         alert("Please enter all class hours details");
      }




   this.setState({errors3: errors3});
   return formIsValid3;
}


contactSubmit3(e){

    if(this.handleValidation3()){
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
        <div class="form">
            <table>
                <tr>
        <div className="container4"><fieldset>
      <form action="http://localhost:8000/VIEW" method="post">
        
          <legend>
            <span className="number">1</span> VIEW FACULTY TIMETABLE
          </legend><br></br>
          Faculty Name *:
          <input type="text" name="fid0" placeholder="Faculty id *" onChange={this.handleChange1}/>
          <span style={{color: "red"}}>{this.state.errors["fid0"]}</span> <br/>
                   
         
                   
          Sem *:
          <select id="lang" name="sem0" onChange={this.handleChange1}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a SEM</option>
         
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option> 
          <option value ="5">5</option>
          <option value ="6">6</option>
          <option value ="7">7</option>
          <option value ="8">8</option>
          
        </select><br/>
          <span style={{color: "red"}}>{this.state.errors["sem0"]}</span> <br/>
                   
          <button style={{borderRadius: '50px', width: '300px',backgroundColor:' rgb(107, 180, 107)'} } data-testid = "submitbutton" onClick="">VIEW</button>
     
       
      </form> </fieldset>
      </div>
      </tr>
      <tr>
      <div className="container2">  <fieldset>
      <form action="http://localhost:8000/INSERT" method="POST">
      
          <legend>
            <span className="number">2</span>INSERT FACULTY TIME TABLE
          </legend><br></br>
          Faculty Id *:
          <input type="text" name="fid1" placeholder="Faculty id *" onChange={this.handleChange2.bind(this, "fid1")}/>
          <span style={{color: "red"}}>{this.state.errors2["fid1"]}</span> <br/>
          Faculty Name*:
          <input type="text" name="fn1" placeholder="Faculty name *" onChange={this.handleChange2.bind(this, "fn1")}/>
          <span style={{color: "red"}}>{this.state.errors2["fn1"]}</span> <br/>
          
          Year *:
          
          <select id="lang" name="y1" onChange={this.handleChange2.bind(this, "y1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
          
          <span style={{color: "red"}}>{this.state.errors2["y1"]}</span> <br/>
          Sem *:
          <select id="lang" name="sem1" onChange={this.handleChange2.bind(this, "sem1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a SEM</option>
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option> 
          <option value ="5">5</option>
          <option value ="6">6</option>
          <option value ="7">7</option>
          <option value ="8">8</option>
          
        </select><br/>
          <span style={{color: "red"}}>{this.state.errors2["sem1"]}</span> <br/>
          Day *:
         
          <select id="lang" name="day1" onChange={this.handleChange2.bind(this, "day1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value="select">Select a DAY</option>
          
          <option value ="Monday">Monday</option>
          <option value ="Tuesday">Tuesday</option>
          <option value ="Wednesday">Wednesday</option>
          <option value ="Thursday">Thursday</option>
          <option value ="Friday">Friday</option>
         
          
        </select><br/>
         
          <span style={{color: "red"}}>{this.state.errors2["day1"]}</span> <br/>
          
          <h4>Enter Time Table</h4>
          First Hour *:
          <input type="text" name="fh1" placeholder="First Hour *" onChange={this.handleChange2.bind(this, "fh1")}/>
          Second Hour *:
          <input type="text" name="sh1" placeholder="Second Hour *" onChange={this.handleChange2.bind(this, "sh1")}/>
          Third Hour *:
          <input type="text" name="th1" placeholder="Third Hour *" onChange={this.handleChange2.bind(this, "th1")}/>
          Fourth Hour *:
          <input type="text" name="foh1" placeholder="Fourth Hour *"onChange={this.handleChange2.bind(this, "foh1")} />
          Fifth Hour *:
          <input type="text" name="fih1" placeholder="Fifth Hour *" onChange={this.handleChange2.bind(this, "fih1")}/>
          Sixth Hour *:
          <input type="text" name="sih1" placeholder="Sixth Hour *" onChange={this.handleChange2.bind(this, "sih1")}/>
          Seventh Hour *:
          <input type="text" name="seh1" placeholder="Seventh Hour *" onChange={this.handleChange2.bind(this, "seh1")}/>
          Eighth Hour *:
          <input type="text" name="eh1" placeholder="Eight Hour *" onChange={this.handleChange2.bind(this, "eh1")}/>
          Ninth Hour *:
          <input type="text" name="nh1" placeholder="Nine Hour *" onChange={this.handleChange2.bind(this, "nh1")}/>
    
        <input type="submit" Value="INSERT" />
      </form>    </fieldset>
      </div>
      </tr>
      <tr>
      <div className="container3">   <fieldset>
      
      <form action="http://localhost:8000/MODIFY" method="post">
     
          <legend>
            <span className="number">3</span>MODIFY FACULTY TIME TABLE
          </legend><br></br>
          Faculty Name *:
          <input type="text" name="fid2" placeholder="Faculty id *" onChange={this.handleChange3.bind(this, "fid2")}/>
          <span style={{color: "red"}}>{this.state.errors2["fid2"]}</span> <br/>
   
          Year *:
          <select id="lang" name="y2" onChange={this.handleChange3.bind(this, "y2")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
		
          <span style={{color: "red"}}>{this.state.errors2["y2"]}</span> <br/>
         
          Sem *:
          <select id="lang" name="sem2" onChange={this.handleChange3.bind(this, "sem2")}style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option> 
          <option value ="5">5</option>
          <option value ="6">6</option>
          <option value ="7">7</option>
          <option value ="8">8</option>
        </select><br/>
    
          <span style={{color: "red"}}>{this.state.errors2["sem2"]}</span> <br/>
         
          Day *:
         
          <select id="lang" name="day2" onChange={this.handleChange3.bind(this, "day2")}style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value="select">Select a DAY</option>
       
          <option value ="Monday">Monday</option>
          <option value ="Tuesday">Tuesday</option>
          <option value ="Wednesday">Wednesday</option>
          <option value ="Thursday">Thursday</option>
          <option value ="Friday">Friday</option>
         
          
        </select><br/>
         
         <span style={{color: "red"}}>{this.state.errors3["day2"]}</span> <br/>
          
          <h4>Enter Time Table</h4>
          First Hour *:
          <input type="text" name="fh2" placeholder="First Hour *" onChange={this.handleChange3.bind(this, "fh2")} />
          Second Hour *:
          <input type="text" name="sh2" placeholder="Second Hour *" onChange={this.handleChange3.bind(this, "sh2")} />
          Third Hour *:
          <input type="text" name="th2" placeholder="Third Hour *" onChange={this.handleChange3.bind(this, "th2")} />
          Fourth Hour *:
          <input type="text" name="foh2" placeholder="Fourth Hour *" onChange={this.handleChange3.bind(this, "foh2")} />
          Fifth Hour *:
          <input type="text" name="fih2" placeholder="Fifth Hour *" onChange={this.handleChange3.bind(this, "fih2")} />
          Sixth Hour *:
          <input type="text" name="sih2" placeholder="Sixth Hour *" onChange={this.handleChange3.bind(this, "sih2")} />
          Seventh Hour *:
          <input type="text" name="seh2" placeholder="Seventh Hour *" onChange={this.handleChange3.bind(this, "seh0")} />
          Eighth Hour *:
          <input type="text" name="eh2" placeholder="Eight Hour *" onChange={this.handleChange3.bind(this, "eh2")} />
          Ninth Hour *:
          <input type="text" name="nh2" placeholder="Nine Hour *" onChange={this.handleChange3.bind(this, "nh2")} />
       
        <input type="submit" Value="MODIFY" />
      </form> </fieldset>
      </div></tr>
      </table>
      </div>
    );
  }
}

export default Faculty;
