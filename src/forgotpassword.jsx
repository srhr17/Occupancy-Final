import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import {
//  BrowserRouter as Router,
//  Link,
//  NavLink,
// 
//} from "react-router-dom";

class forgotpassword extends Component {
    state = { id: "", password: "",new_password: "",errors: {
        id: " ",
        password: callpassword(),
        new_password:callpassword()
      }};
callpassword()
{
  return " ";
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
          case "password":
            errors.password = value.length < 5? "Password too short" : "";
            break;
    
          case "new_password":
            errors.new_password = value.length <5  ? "Password does not match" : "";
            break;
    
          
          default:
            break;
        }
    
        this.setState({ errors, [name]: value });
      };
    render() {
        return (
            <form id='custrom'>
            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
            <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  
                  <a href='#!' className='blue-text font-weight-bold'>
                    <strong>Reset Password</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label="Your id"
                group
                type="text"
                name="id"
                validate
              />
              <MDBInput
                label="Your new password"
                group
                type="password"
                name="password"

                onChange={this.handleChange}
                validate
                containerClass="mb-0"
              />
              <div className="errors">
                        {this.state.errors.password}{" "}
                      </div>
              <MDBInput
                label="retype password"
                group
                type="password"
                name="new_password"
                onChange={this.handleChange}
                validate
                containerClass="mb-0"
              />
              <div className="errors">
                        {this.state.errors.new_password}{" "}
                      </div>
              <div className="text-center mb-3">
              <span style={{ color: "red" }}>{this.state.userMessage}</span>
                <MDBBtn
                  type="submit"
                  gradient="cyan"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("if bayata undhi")
                    console.log(this.state.errors)
                    if (!this.validateForm(this.state.errors) && this.state.errors.password!=this.state.errors.new_password) {
                      alert("message alerted")
                      e.preventDefault();
                      this.setState(() => {
                        return { userMessage: "Please check the password" };
                      });
                    } else {
                      e.preventDefault();
                      alert("submit");
                    
                    var formdata= new FormData(document.getElementById("custrom"));
                    var data= new URLSearchParams();
                    for (var pair of formdata) {
                      data.append(pair[0], pair[1])
                    }
                    console.log(data)
                
                    fetch('http://localhost:8000/forgotpassword', {
                      method: 'post',
                      body: data
                    })
                    window.history.pushState(null, "str", "/login");
                          window.location.reload();
                    }}}
                >
                  Update
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </form>
        );
    }
}

export default forgotpassword;