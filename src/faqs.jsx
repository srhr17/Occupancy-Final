import React, { Component } from 'react';
import "./styles.css";
import Accordion from "./Accordion.js";
class faqs extends Component {
    

    render() { 
        return ( 
            <div className="App">
      <Accordion
        title="Q1. How to login and signup for authentication ?"
        content="
        <p>step1: select a category which is student portal,faculty portal and admin portal for login to your account based on your valid credentials.</p>
        <br>
        <p>step2: login/signup credentials for student: userid,password.</p>
        </br>
        <p>step3: login/signup credentials for faculty: facultyid,password.</p>
        </br>
        <p>step4: login/signup credentials for admin: adminid,password.</p>
        </br>
        <p>step5: after finished filling with your valid credentials then click on login button.</p>
        "
      />
      <Accordion
        title="Q2. Forgot password ?"
        content="
        <p>step1: click on forgot password button.</p>
        <br>
        <p>step2: fill up your userid and enter your prefferable new password.</p>
        <br>
        <p>step3: confirm your new password.</p>
        <br>
        <p>step4: click on submit.</p>
        "
      />
      
     <Accordion
        title="Q3. How to check timetable based on classroom number?"
        content="
        <p>step1: login to your account with your valid credentials : userid,password.</p>
        <br>
        <p>step2: then click on MyTimetable and select the classroom number , Ex:A203,D304... and select semester.</p>
        <br>
        <p>step3: click on submit button.</p>
        "
      />
      <Accordion
        title="Q4. Contact Us...!"
        content="
        <p>step1: select a contact based on your category.</p>
        <br>
        <p>step2: categories:student,faculty</p>
        <br>
        <p>step3: for student issues contact, Dr.Priyanka Kumar:9998887776.</p>
        <br>
        <p>step4: for faculty issues contact, Dr.Ganesh Iyer:9443268701.</p>
        "
      />
      <Accordion
        title="Q5. what does this application do?"
        content="
        <p>step1: It allows you to see faculty time table based on classroom number selected and respective semester.</p>
        <br>
        <p>step2: It allows your book a classroom based on room specifications mentioned such as projector,AC, socket, Mic,Speaker,Fan,Marker board and time you have selected.</p>
        </br>
        <p>step3: You can view free classes based on day,roomnumber and semester you have selected.</p>
        </br>
        <p>step4: If you have any issues you may contact admin and get over with your issues.</p>
        </br>
        <p>step5: Student and Faculty can view cancled classes on a particular day by selecting faculty id and day.</p>
        "
      />
      <Accordion
        title="Q6. Any issues in login or signup?"
        content="
        <p>step1: For further issues contact Admin.</p>
        <br>
        <p>step2: Make sure your are given your Email Id along with your phonenumber when asked to.</p>
        <br>
        <p>step3: write your issue that has occured and click on submit button.</p>
        "
      />
      
    </div>
         );
    }
}
 
export default faqs;