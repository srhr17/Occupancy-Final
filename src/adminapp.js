


import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
class adminlogin extends Component {
	constructor(props) {
		super(props);
	
	}

	stud = (event) => {
		window.history.pushState(null, 'stud', '/stud');
		window.location.reload();
	};

	fac = (event) => {
		window.history.pushState(null, 'fac', '/fac');
		window.location.reload();
	};

	rooms = (event) => {
		window.history.pushState(null, 'rooms', '/rooms');
		window.location.reload();
	};
    
	feat = (event) => {
		window.history.pushState(null, 'feat', '/feat');
		window.location.reload();
	};
	booking = (event) => {
		window.history.pushState(null, 'booking', '/booking');
		window.location.reload();
	};



	render() {
		return (
			<div style={{backgroundColor:'121212'}}>

<br />
				<br />
				<br />
				<fieldset>
				<center><h1 style={{  display: 'inline',fontSize:'400%',color:'#000000'}}>
					Admin Portal
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
				 background: '#000000',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px'}}>
						<h5>	<NavLink to="/stud" onClick={this.rooms}>
								Room Content
							</NavLink>
							</h5>
              </button>
              <br/>
              <br/>
					<button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#000000',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'50px',paddingRight:'50px'}}>
						<h5>	<NavLink to="/stud" onClick={this.stud}>
								Student Content
							</NavLink>
							</h5>
            </button>
            <br/>
            <br/>
            <button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#000000',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'80px',paddingRight:'80px'}}>
						<h5>	<NavLink to="/fac" onClick={this.fac}>
								Faculty Content
							</NavLink>
							</h5>
              </button><br/>
            <br/>
		
			  <button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#000000',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'80px',paddingRight:'80px'}}>
						<h5>	<NavLink to="/feat" onClick={this.feat}>
								Features Content
							</NavLink>
							</h5>
              </button><br/>
            <br/>
			<button style={{borderRadius:'40px', padding: '40px',
       minwidth: '40px',
        height: '50px',
				 background: '#000000',
				 paddingTop:'15px',cursor: 'pointer',textalign: 'center',color: 'white',fontSize:'10px',paddingLeft:'80px',paddingRight:'80px'}}>
						<h5>	<NavLink to="/booking" onClick={this.booking}>
								Approve room booking
							</NavLink>
							</h5>
              </button><br/>
            <br/>
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

export default adminlogin;
