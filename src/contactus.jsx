import React from "react";
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";
  import  { Component } from "react";
  import './css/style-green.css'
  import './css/style-orange.css'
  import './css/style-purple.css'
  import './css/style-red.css'
  import './css/style-sky-blue.css'
  import './css/style.css'

class contactus extends Component {
    state = { email: "", name: "", usertype: " ",comment: ""};
  emailChange = event => {
    this.setState({ email: event.target.value });
  };
  nameChange = event => {
    this.setState({ name: event.target.value });
  };
  commentChange = event => {
    this.setState({ comment: event.target.value });
  };
  userTypeChanged = event => {
    if (event.target.value === "bad") {
      this.setState({ usertype: "bad" });
    }
    if (event.target.value === "good") {
      this.setState({ usertype: "good" });
    }
    if (event.target.value === "excellent") {
      this.setState({ usertype: "excellent" });
    }
  };
  
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Get In Touch</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content name="keywords" />
        <meta content name="description" />
        {/* Favicons */}
        <link href="img/favicon.png" rel="icon" />
        {/* Bootstrap CSS File */}
        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Libraries CSS Files */}
        <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* Main Stylesheet File */}
        <link href="css/style.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n  body {\n  background-image: url(\"contact.jpg\");\n  background-repeat: no-repeat;\n\n  background-size:1600px 800px;\n\n}\n" }} />
        <center>
          <h1>
            Get In Touch
          </h1>
          <div>
            <ul className="list-ico">
              <b> <li><a href="https://goo.gl/maps/JNhxZv6hVjkWaywp8"><span className="ion-ios-location" /> Amrita Vishwa Vidyapeetham,Ettimadai,Coimbatore</a></li></b><a href="https://goo.gl/maps/JNhxZv6hVjkWaywp8">
                <b></b></a><b><li><a href="https://goo.gl/maps/JNhxZv6hVjkWaywp8" /><a href="tel:+91180042590009"><span className="ion-ios-telephone" /> 180042590009</a></li></b>
              <b>  <li><a href="mailto: btech@amrita.edu"><span className="ion-email" /> btech@amrita.edu</a></li></b>
            </ul>
          </div>
        </center>
      </div>
    );
    }
  

 
};
export default contactus;
