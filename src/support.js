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
class support extends Component {
	constructor(props) {
		super(props);
	
	}



    faqs = () => {
        window.history.pushState(null,"str","/faqs");
        window.location.reload();
	  };
	  feedback = () => {
        window.history.pushState(null,"str","/feedback");
        window.location.reload();
	  };
	  contactus = () => {
        window.history.pushState(null,"str","/contactus");
        window.location.reload();
      };


	render() {
		return (
			<div>

<br />
				<br />
				<br />
				<fieldset>
				<center><h1 style={{  display: 'inline',fontSize:'400%',color:'#4d001f'}}>
					Support
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
						<h5>	<NavLink to="/feedback" onClick={this.feedback}>
								Feedback
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
						<h5>	<NavLink to="/faqs" onClick={this.faqs}>
								FAQ'S
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
						<h5>	<NavLink to="/contactus" onClick={this.contactus}>
								Contact US
							</NavLink>
							</h5>
              </button>
			  <br/>
              <br/>
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

export default support;



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