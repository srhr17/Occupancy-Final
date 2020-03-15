// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>chetan</h1>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
class studentlogin extends Component {
	constructor(props) {
		super(props);
	
	}

	Studenttimetable = (event) => {
		window.history.pushState(null, 'Studenttimetable', '/Studenttimetable');
		window.location.reload();
	};

	studentroomwise = (event) => {
		window.history.pushState(null, 'studentroomwise', '/studentroomwise');
		window.location.reload();
	};

	studentfree = (event) => {
		window.history.pushState(null, 'studentfree', '/studentfree');
		window.location.reload();
	};
	studentfeat = (event) => {
		window.history.pushState(null, 'studentfeat', '/studentfeat');
		window.location.reload();
	};
	studentfacu = (event) => {
		window.history.pushState(null, 'studentfacu', '/studentfacu');
		window.location.reload();
	};


	render() {
		return (
			<div style={{backgroundColor:' #bbff99'}}>

<br />
				<br />
				<br />
				<fieldset>
				<center><h1 style={{  display: 'inline',fontSize:'400%',color:'#4d001f'}}>
					Student Portal
				</h1>
        </center>
		</fieldset>
		<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br/>
				<Router>
				<center>

      
						<button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#cc6600',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px'}}>
						<h5>	<NavLink to="/Studenttimetable" onClick={this.Studenttimetable}>
								Student Timetable
							</NavLink>
							</h5>
              </button>
              <br/>
              <br/>
					<button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#cc6600',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'50px',paddingRight:'50px'}}>
						<h5>	<NavLink to="/studentroomwise" onClick={this.studentroomwise}>
								Room Timetable
							</NavLink>
							</h5>
            </button>
            <br/>
            <br/>
            <button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#cc6600',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'80px',paddingRight:'80px'}}>
						<h5>	<NavLink to="/studentfree" onClick={this.studentfree}>
								Free Slots
							</NavLink>
							</h5>
              </button>
			  <br/>
              <br/>
					<button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#cc6600',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'50px',paddingRight:'50px'}}>
						<h5>	<NavLink to="/studentfacu" onClick={this.studentfacu}>
								Faculty Timetable
							</NavLink>
							</h5>
            </button>
			<br/>
              <br/>
					<button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#cc6600',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'50px',paddingRight:'50px'}}>
						<h5>	<NavLink to="/studentfeat" onClick={this.studentfeat}>
								Room Features							</NavLink>
							</h5>
            </button>
						{/* <li>
							<NavLink to="/freeslotfaculty" onClick={this.freeslotfaculty}>
								My Free Slots{' '}
							</NavLink>
						</li>
						 */}
            </center>
				</Router>



				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				
				
			</div>
		);
	}
}

export default studentlogin;



// style={{fontfamily:'Poppins-Medium',
//         fontsize: '30px',
//         color: '#555555',
//         lineheight: '0',
//         display: '-webkit-box',
//         display: '-webkit-flex',
//         display: '-moz-box',
//         display: '-ms-flexbox',
//         display: 'flex',
//         justifycontent: 'center',
//         alignitems: 'center',
//         padding: '40px',
//         minwidth: '120px',
//         height: '50px',
//         borderradius: '25px',
//         background: '#9152f8',
//         background: '-webkit-linear-gradient(bottom, #f38a08,maroon)',
//         background: '-o-linear-gradient(bottom, #7579ff, #b224ef)',
//         background: '-moz-linear-gradient(bottom, #7579ff, #b224ef)',
//         background: 'linear-gradient(bottom, #7579ff, #b224ef)',
//         position: 'relative',
//         zindex: '1',
//         webkittransition: 'all 0.4s',
//         otransition: 'all 0.4s',
//         moztransition: 'all 0.4s',
// 		transition: 'all 0.4s',borderradius:'10px',
// 		content: "",
//   display: 'block',
//   position: 'absolute',
//   zindex: '-1',
//   width: '100%',
//   height: '100%',
//   borderradius: '25px',
//   backgroundcolor: '#fff',
//   top: '0',
//   left: '0',
//   opacity: '1',

//   webkittransition: 'all 0.4s',
//   otransition: 'all 0.4s',
//   moztransition: 'all 0.4s',
//   transition: 'all 0.4s'}}