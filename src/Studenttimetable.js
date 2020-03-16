import React from 'react';

//import logo from './logo.svg';
//import './App.css';
//import Logo from './logo.jpg';
//import hostname from "../../hostname";

//import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
//import 'react-inputs-validation/lib/react-inputs-validation.min.css';

function Header() {
	// Import result is the URL of your image
	//return <img src={logo} alt="logo" />;
}
// export default Header;
class Studenttimetable extends React.Component {
	constructor() {
		super();
		this.state = {
			section: '',
			sem: ''
			//  ,

			//  errors: {

			//    section: " ",
			//   sem: " "
			//  }
		};
	}

	//  validateForm = errors => {
	//    let valid = true;
	//    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
	//    return valid;
	//  };

	//  handleChange = e => {
	//    const { name, value } = e.target;
	//    let errors = this.state.errors;
	//    switch (name) {

	//      case "section":
	//        errors.section = value === " " ? "Select section" : "";
	//        break;

	//      case "sem":
	//        errors.sem = value === " " ? "Select sem" : "";
	//        break;

	//      default:
	//        break;
	//    }

	//    this.setState({ errors, [name]: value });
	//  };

	render() {
		return (
			<div>
				<div>
					<div style={{ backgroundColor: '#ffeecc' }}>
						<h1
							style={{
								textAlign: 'center',
								border: '20px solid white',
								padding: '20px',
								backgroundColor: '#b3daff',
								borderBottom: '20px solid grey',
								paddingRight: '30px'
							}}
						>
							STUDENT TIMETABLE
						</h1>

						<form
							action="http://localhost:8000/time"
							method="POST"
							style={{
								border: '3px solid black',
								textAlign: 'center',
								padding: '15px',
								margin: '10px 450px',
								backgroundColor: 'ivory',
								borderRadius: '35px',
								marginTop: '13%'
							}}
						>
							<br />
							<label>
								<h3 style={{ paddingLeft: '70px', paddingRight: '20px' }}>SEM:</h3>
							</label>
							<select
								name="sem"
								onChange={this.handleChange}
								style={{
									borderRadius: '10px',
									paddingRight: '10px',
									paddingLeft: '10px',
									width: '150px'
								}}
							>
								<option value=" ">Select</option>
								<option value="2">2</option>
								<option value="4">4</option>
								<option value="6">6</option>
								<option value="8">8</option>
							</select>
							<span style={{ color: 'red' }}>{this.state.errors['sem']}</span> <br />
							<br />
							<br />
							<label>
								<h3 style={{ paddingLeft: '30px', paddingRight: '30px' }}>SECTION:</h3>
							</label>
							<select
								name="section"
								onChange={this.handleChange}
								style={{
									borderRadius: '10px',
									paddingRight: '10px',
									paddingLeft: '10px',
									width: '150px'
								}}
							>
								<option value=" ">Select</option>
								<option value="A">A</option>
								<option value="B">B</option>
								<option value="C">C</option>
								<option value="D">D</option>
								<option value="E">E</option>
								<option value="F">F</option>
							</select>
							<span style={{ color: 'red' }}>{this.state.errors['section']}</span> <br />
							<br />
							{/* <input type="submit" name="submit"></input> */}
							<button
								style={{ borderRadius: '50px', width: '150px', backgroundColor: ' #80ff80' }}
								data-testid="submitbutton"
								onClick=""
							>
								SUBMIT
							</button>
							{/* <input
                      data-testid="submit"
                      type="submit"
                      onClick={e => {
                        if (!this.validateForm(this.state.errors)) {
                          e.preventDefault();
                          this.setState(() => {
                            return { userMessage: "Please check the fields" };
                          });
                        } else {
                           e.preventDefault();
                           fetch(
                             "http://localhost:8000/login",
                             {
                               method: "POST",
                               body: new URLSearchParams(this.state)
                             }
                           )}}}
                          ></input> */}
						</form>
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
				</div>
			</div>
		);
	}
}

export default Studenttimetable;
