import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Logo from './logo.jpg';



function Header() {
  // Import result is the URL of your image
  //return <img src={logo} alt="logo" />;
}
// export default Header;
class Studentfree extends React.Component
{constructor() {
  super();
  this.state = {
 
    section: "",
    sem: "",

    errors: {
      
      section: " ",
     sem: " "
    }
  };
}

validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

handleChange = e => {
  const { name, value } = e.target;
  let errors = this.state.errors;
  switch (name) {
    
    case "section":
      errors.section = value === " " ? "Select section" : "";
      break;

    case "sem":
      errors.sem = value === " " ? "Select sem" : "";
      break;

    default:
      break;
  }

  this.setState({ errors, [name]: value });
};

render(){
  return(
    
        
    <div >
      
    {/* <div className="container-login100" style={{backgroundImage: {flex: 1,resizeMode: 'stretch'},backgroundImage: 'url("https://edtechmagazine.com/higher/sites/edtechmagazine.com.higher/files/styles/cdw_hero/public/articles/hied-flipped.jpg?itok=0JGxMS-4")'}}> */}
    <div style={{backgroundColor:"#ffeecc"}} >
      <div > 
      
      
        <h1 style={{textAlign: 'center', border: '20px solid white', padding: '20px', backgroundColor: '#b3daff', borderBottom: '20px solid grey'}}>FREE SLOTS</h1>
        
        <form action="http://localhost:8000/free" method="POST"  style={{border: '3px solid black', textAlign: 'center', padding: '15px', margin: '10px 450px', backgroundColor: 'ivory', borderRadius: '35px',marginTop:"13%",}}>
        <br/>
        
        {/* <h3>YEAR: &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" placeholder="YEAR" name="year" onChange={this.handleChange1.bind(this, "year")} required style={{paddingLeft: '30px', width: '150px',borderRadius: '10px'}}/>
          <br/>
          <span style={{color: "red"}}>{this.state.errors1["year"]}</span> <br/>
            <br />
            
            </h3>
           */}
          {/* <h3>SEM: &nbsp;&nbsp;&nbsp;&nbsp;
          
            <input type="number" name="sem" placeholder="SEM" onChange={this.handleChange1.bind(this, "sem")} required style={{paddingLeft: '30px', width: '150px',borderRadius: '10px'}} />
            {/* value = {this.state.number} onChange={(event) => this.handle(event)} */}
           {/* <br/>
            <span style={{color: "red"}}>{this.state.errors1["sem"]}</span> <br/>
            <br />
            
           </h3>
       
        
        
          <h3>SECTION: &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="section" placeholder="Section" onChange={this.handleChange1.bind(this, "section")} required style={{paddingLeft: '30px', width: '150px',borderRadius: '10px',marginLeft:"0%"}} />
            <br/>
            <span style={{color: "red"}}>{this.state.errors1["section"]}</span> <br/>
             */} 
             {/* </h3>  */}
             <label><h3 style={{paddingLeft:'70px',paddingRight:'20px'}}>SEM:</h3></label>
     

     <select name="sem" onChange={this.handleChange} style={{borderRadius:'10px',paddingRight:'10px',paddingLeft:'10px',width:'150px'}}>
                   <option value=" ">Select</option>
                   <option value="2">2</option>
                   <option value="4">4</option>
                   <option value="6">6</option>
                   <option value="8">8</option>
             
                 </select>


   <span style={{color: "red"}}>{this.state.errors["sem"]}</span> <br/>

      <br/>

      <br/>
   
 
        
<label><h3 style={{paddingLeft:'30px',paddingRight:'30px'}}>SECTION:</h3></label>


    
                 <select name="section" onChange={this.handleChange} style={{borderRadius:'10px',paddingRight:'10px',paddingLeft:'10px',width:'150px'}}>
                   <option value=" ">Select</option>
                   <option value="A">A</option>
                   <option value="B">B</option>
                   <option value="C">C</option>
                   <option value="D">D</option>
                   <option value="E">E</option>
                   <option value="F">F</option>
                 </select>

   <span style={{color: "red"}}>{this.state.errors["section"]}</span> <br/>


  
<br/>



            <button style={{borderRadius: '50px', width: '150px',backgroundColor:' #80ff80'}} data-testid = "submitbutton" onClick="">SUBMIT</button>
         
          </form>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
       
  
          </div>
          </div>
          </div>
          // </div>
    );
}
}
// function Time() {
//   return (
//     <div className="App">
//       <h1 style={{ marginLeft: "35%", marginTop: "8%", marginRight: "30%",color:"Blue" }}>Class Room Timetable</h1>
//      <fieldset>
//      <center>Email:<input type="text" name="emailid" style={{ color: "Black",borderRadius:"20%" }} /></center>
//      </fieldset>
//     </div>
//   );
// }

export default Studentfree;
