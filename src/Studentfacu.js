import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Logo from './logo.jpg';

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="logo" />;
// }
// export default Header;
// {constructor(props)
//     {
//         super(props)
//         this.state={day:'',room:''}

//         this.change=this.change.bind(this)

//         this.handle=this.handle.bind(this)

//     }

//     change(event)
//     {

//         // if(!(/^[a-z\s]+$/i.test(this.state.name)))
//         // {
//         //     alert("Name should not contain numbers or special characters");
//         //     event.preventDefault();
//         // }

//         if(this.state.sem === "day")
//         {
//             alert("enter SEM");
//             event.preventDefault();
//         }

//         else if(this.state.number=== "room")
//         {
//             alert("enter YEAR");
//             event.preventDefault();
//         }

//     }

//     handle(e)
//     {
//         const day = e.target.day;
//         const val = e.target.value;

//         this.setState({[day]: val})
//         // alert(this.state.name)
//         // alert(this.state.number)
//         // alert(this.state.date)
//         // alert(this.state.code)
//     }
class Studentfacu extends React.Component {
	constructor() {
		super();
		this.state = {
			fid: '',

			errors: {
				fid: ' '
			}
		};
	}

	validateForm = (errors) => {
		let valid = true;
		Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
		return valid;
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		let errors = this.state.errors;
		switch (name) {
			case 'fid':
				errors.fid = value === ' ' ? 'select name' : '';
				break;
			case 'sid':
				errors.fid = value === ' ' ? 'select name' : '';
				break;

			default:
				break;
		}

		this.setState({ errors, [name]: value });
	};

	render() {
		return (
			<div class="limiter">
				{/* <div className="container-login100" style={{backgroundImage: {flex: 1,resizeMode: 'stretch'},backgroundImage: 'url("https://edtechmagazine.com/higher/sites/edtechmagazine.com.higher/files/styles/cdw_hero/public/articles/hied-flipped.jpg?itok=0JGxMS-4")'}}> */}

				<div style={{ backgroundColor: '#ffeecc' }}>
					<h1
						style={{
							textAlign: 'center',
							border: '20px solid white',
							padding: '20px',
							backgroundColor: '#b3daff',
							borderBottom: '20px solid grey'
						}}
					>
						FACULTY TIMETABLE
					</h1>

					<form
						action="http://localhost:8000/facul"
						method="POST"
						style={{
							border: '3px solid black',
							textAlign: 'center',
							padding: '15px',
							margin: '100px 450px',
							backgroundColor: 'ivory',
							borderRadius: '35px',
							marginTop: '14%'
						}}
					>
						<label>
							<h3 style={{ paddingLeft: '70px', paddingRight: '20px' }}>Faculty Name:</h3>
						</label>
						<select
							name="fid"
							onChange={this.handleChange}
							style={{ borderRadius: '10px', paddingRight: '10px', paddingLeft: '10px', width: '150px' }}
						>
							<option value=" ">Select</option>
							<option value="401">Dr.Harini</option>
							<option value="402">Ms.G.R Ramya</option>
							<option value="403">Dr.Priyanka Kumar</option>
							<option value="404">Dr.P.Prakash</option>
						</select>
						<span style={{ color: 'red' }}>{this.state.errors['fid']}</span> <br />
						{/* 
        <label><h3 style={{paddingLeft:'70px',paddingRight:'20px'}}>SEM:</h3></label>
     

          <select name="sem" onChange={this.handleChange} style={{borderRadius:'10px',paddingRight:'10px',paddingLeft:'10px',width:'150px'}}>
                        <option value=" ">Select</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                  
                      </select>
    
    
        <span style={{color: "red"}}>{this.state.errors["sem"]}</span> <br/> */}
						<br />
						<br />
						<button
							style={{ borderRadius: '50px', width: '150px', backgroundColor: ' #80ff80' }}
							data-testid="submitbutton"
							onClick=""
						>
							Submit
						</button>
					</form>

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
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

export default Studentfacu;
