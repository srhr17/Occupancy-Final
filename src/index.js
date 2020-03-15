import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import studentlogin from './studentlogin';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Facultytimetable from './components/Facultytimetable.jsx';
import Roomtimetable from './components/Roomtimetable.jsx';
import Freeslotfaculty from './components/freeslotfaculty.jsx';
import Roomfeat from './components/roomfeatures.jsx';
import Cancelclass from './components/cancelclass.jsx';
import Signup from './Signup.jsx';
import 'mdbreact/dist/css/mdb.css';
import './login.css';
import Requestroombooking from './components/requestroombooking.jsx';

import forgotpassword from './forgotpassword';

import studentfeat from './studentfeat';
import studentfacu from './Studentfacu.js';
import studenttimetable from './Studenttimetable.js';
import studentroomwise from './studentroomwise.js';
import studentfree from './studentfree';
import Viewcancelclass from './Viewcancelclass';


import Time from './Time.jsx';
import Login from './Login.jsx';


import Studentlogin from './Appstudent.js';

import support from './support.js';
import faqs from './faqs.jsx';

import Feature from './feat.js';
import contactus from './contactus.jsx';
import Room from './Room.js';
import adminlogin from './adminlogin.js';
import Booking from './Booking.js';
import Student from './Student.js';
import Faculty from './Faculty.js';
import feedback from './feedback.jsx';
ReactDOM.render(
	<React.Fragment>
		<Router>
			<Switch>
            <Route exact path="/" component={Signup} />
        	<Route exact path="/login" component={Login} />
        	<Route exact path="/display" component={Time} />
				<Route exact path="/studentlogin" component={Studentlogin} />
    
				<Route exact path="/stud" component={Student} />
				<Route exact path="/rooms" component={Room} />
				<Route exact path="/fac" component={Faculty} /> 
    <Route exact path="/feat" component={Feature} />
    	<Route exact path="/booking" component={Booking} />
    
    
    
//    <Route exact path="/support" component={support} />
			<Route exact path="/faqs" component={faqs} />
        	
    	<Route exact path="/contactus" component={contactus} />
    	<Route exact path="/feedback" component={feedback} />
    
    
				<Route exact path="/faculty" component={App} />
				<Route exact path="/facultytimetable" component={Facultytimetable} />
				<Route exact path="/roomtimetable" component={Roomtimetable} />
				<Route exact path="/freeslotfaculty" component={Freeslotfaculty} />
				<Route exact path="/cancelclass" component={Cancelclass} />
				<Route exact path="/roomfeat" component={Roomfeat} />
				<Route exact path="/requestroombooking" component={Requestroombooking}/>
    
    
                <Route exact path="/Studenttimetable" component={studenttimetable} />
				<Route exact path="/studentroomwise" component={studentroomwise} />
                <Route exact path="/studentfree" component={studentfree} />
                <Route exact path="/studentfacu" component={studentfacu} />
				<Route exact path="/studentfeat" component={studentfeat} />
				<Route exact path="/viewcancel" component={Viewcancelclass} />
                <Route exact path="/studentlogin" component={studentlogin} />
    	<Route exact path="/forgotpassword" component={forgotpassword} />
     <Route component={adminlogin} />
    <Route component={Studentlogin} />
      <Route component={support} />
    
				<Route component={App} />
			</Switch>
		</Router>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
