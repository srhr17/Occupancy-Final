import React from 'react';
import { Form } from 'reactstrap';
import { Component } from 'react';
import './form.css';

class feedback extends Component {
	state = { email: '', name: '', usertype: ' ', comment: '' };
	emailChange = (event) => {
		this.setState({ email: event.target.value });
	};
	nameChange = (event) => {
		this.setState({ name: event.target.value });
	};
	commentChange = (event) => {
		this.setState({ comment: event.target.value });
	};
	userTypeChanged = (event) => {
		if (event.target.value === 'bad') {
			this.setState({ usertype: 'bad' });
		}
		if (event.target.value === 'good') {
			this.setState({ usertype: 'good' });
		}
		if (event.target.value === 'excellent') {
			this.setState({ usertype: 'excellent' });
		}
	};

	submit = (event) => {
		//    var value=this;
		var formdata = new FormData(document.getElementById('custrm'));
		var data = new URLSearchParams();
		// var ft=0
		for (var pair of formdata) {
			data.append(pair[0], pair[1]);
		}
		console.log(data);

		fetch('http://localhost:8000/feedback', {
			method: 'post',
			body: data
		});
		window.history.pushState(null, 'str', '/login');
		window.location.reload();
		alert('feedback submitted succesfully');
	};

	render() {
		return (
			<Form id="custrm">
				<div>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Feedback Form Using HTML, CSS And PHP - reusable form</title>
					{/* Latest compiled and minified CSS */}
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
					/>
					{/* Optional theme */}
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
					/>
					<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
					<link rel="stylesheet" href="form.css" />
					<div className="container">
						<div className="imagebg" />
						<div className="row " style={{ marginTop: '50px' }}>
							<div className="col-md-6 col-md-offset-3 form-container">
								<h2>Feedback</h2>
								<p> Please provide your feedback below: </p>
								<form role="form" method="post" id="reused_form">
									<div className="row">
										<div className="col-sm-12 form-group">
											<label>How do you rate your overall experience?</label>
											<div className="dropdown">
												<select
													style={{
														marginLeft: '0%',
														width: '180px',
														backgroundColor: '#e6e6e0'
													}}
													name="usertype"
												>
													<option value="bad">Bad</option>
													<option value="good">good</option>
													<option value="excellent">excllent</option>
												</select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-12 form-group">
											<label htmlFor="comments"> Comments:</label>
											<textarea
												className="form-control"
												type="textarea"
												onChange={this.commentChange}
												name="comments"
												id="comments"
												placeholder="Your Comments"
												maxLength={6000}
												rows={7}
												defaultValue={''}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label htmlFor="name"> Your Name:</label>
											<input
												type="text"
												className="form-control"
												id="name"
												name="name"
												onChange={this.nameChange}
												required
											/>
										</div>
										<div className="col-sm-6 form-group">
											<label htmlFor="email"> Email:</label>
											<input
												type="email"
												className="form-control"
												id="email"
												name="email"
												onChange={this.emailChange}
												required
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-12 form-group">
											<button
												type="submit"
												className="btn btn-lg btn-warning btn-block"
												onClick={this.submit}
											>
												Post{' '}
											</button>
										</div>
									</div>
								</form>
								<div id="success_message" style={{ width: '100%', height: '100%', display: 'none' }}>
									{' '}
									<h3>Posted your feedback successfully!</h3>{' '}
								</div>
								<div id="error_message" style={{ width: '100%', height: '100%', display: 'none' }}>
									{' '}
									<h3>Error</h3> Sorry there was an error sending your form.{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Form>
		);
	}
}
export default feedback;
