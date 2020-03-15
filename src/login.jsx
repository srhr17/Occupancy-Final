import React from "react";
import './login.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import  { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";



class Login extends Component {
    state = { id: "", password: "", usertype: 0,count: 0};
  idChange = event => {
    this.setState({ name: event.target.value });
  };
  passwordChange = event => {
    this.setState({ password: event.target.value });
  };
  submit = event => {
    var value=this;
    var formdata= new FormData(document.getElementById("custrm"));
    var data= new URLSearchParams();
    var ft=0
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    console.log(data)

    fetch('http://localhost:8000/login', {
      method: 'post',
      body: data
    }).then(function (response) {
      return response.json();

    
    }).then(function (json) {
      value.setState({ usertype: json[0].usertype })
      value.setState({ password: json[0].password })
      value.setState({ count: json[0].count})
      value.setState({ id: json[0].id })
    
      if (value.state.usertype == 1 && value.state.count<3) {
        ft=1;
        sessionStorage.setItem('aid', value.state.id);
    sessionStorage.setItem('aname', value.state.password);
    alert(sessionStorage.getItem('aid'));
        window.history.pushState(null, "admin", "/adminlogin");
         window.location.reload();
        
      }
      if (value.state.usertype == 2 && value.state.count<3) {
        ft=1;
        sessionStorage.setItem('fid', value.state.id);
    sessionStorage.setItem('fname', value.state.password);
        window.history.pushState(null, "staff", "/faculty");
        window.location.reload();
      }
      if (value.state.usertype == 3 && value.state.count<3){
        ft=1
        sessionStorage.setItem('sid', value.state.id);
    sessionStorage.setItem('sname', value.state.password);
        window.history.pushState(null, "student", "/studentlogin");
        window.location.reload();
      }
      else
      {
        if(value.state.count<3 && ft!=1 ){
        alert("sorry wrong username or password");
        alert("u can press forgot password for a change")
        window.history.pushState(null, "str", "/login");
        ft=0;
        window.location.reload();}
        if(value.state.count==3 && ft!=1)
        {
          alert("ur acoount is temporarily blocked");
          alert("u can press forgot password for a change")
          window.history.pushState(null, "str", "/login");
          window.location.reload();
          ft=0;
        }
        
      }
    })
  };
  userTypeChanged = event => {
    if (event.target.value === "Admin") {
      this.setState({ usertype: "admin" });
    }
    if (event.target.value === "Staff") {
      this.setState({ usertype: "staff" });
    }
    if (event.target.value === "Student") {
      this.setState({ usertype: "student" });
    }
  };
  signup = () => {
    window.history.pushState(null,"str","/");
    window.location.reload();
  };
  forgotpassword = () => {
    window.history.pushState(null,"str","/forgotpassword");
    window.location.reload();
  };
  display = () => {
    window.history.pushState(null,"str","/display");
    window.location.reload();
  };
  viewcancelclass = () => {
    window.history.pushState(null,"str","/viewcancel");
    window.location.reload();
  };
 render(){
  return (
    <html style={{
     }}>
    <body class="wrapper">
      <Form id='custrm'>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard class="d-flex justify-content-center">
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>

<MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your ID" group type="text" validate name='id'onChange={this.idChange} />
              <MDBInput
                label="Your password"
                group
                type="password"
                name="password"
                validate
                containerClass="mb-0"
              />
              <Col>
              <div className='dropdown'>
      
                <select style={{
                  marginLeft: "0%",
                  width: "180px",
                  backgroundColor: "#e6e6e0"
                }} name="usertype">
                  <option value="1">Admin</option>
                  <option value="2">Staff</option>
                  <option value="3">Student</option>
                </select>
              </div>
              </Col>
              <br></br>
              <div>
              <Router>
                    
                <NavLink
                  to="/forgotpassword"
                  exact
                  onClick={this.forgotpassword}
                >                
                  Forgot password
                </NavLink>
          
          </Router>
          </div>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  conChange={this.handleChange}olor="danger"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.submit}
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                  <Router>
                <NavLink
                  to="/"
                  exact
                  onClick={this.signup}
                >                
                  Sign up
                </NavLink>
          </Router>
                
              </p>
              <Router>
              <NavLink
                  to="/display"
                  exact
                  onClick={this.display}
                >                
                  <MDBBtn
                  color="purple"
                  type="button"
                  className="btn-block"
                >
                Display free classes
                </MDBBtn>
                </NavLink>
          </Router>
          <br></br>
          <Router>
              <NavLink
                  to="/viewcancel"
                  exact
                  onClick={this.viewcancelclass}
                >                
                  <MDBBtn
                  color="purple"
                  type="button"
                  className="btn-block"
                >
                View Cancelled class
                </MDBBtn>
                </NavLink>
          </Router>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Form>
    </body>
    </html>
  );
}
};
export default Login;