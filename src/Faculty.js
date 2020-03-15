//import Blank from './';
import React from 'react';

//import css from './css.css';
class Faculty extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fields1: {},
			errors1: {},
			fields2: {},
			errors2: {},

			fields3: {},

			errors3: {}
		};
	}

	handleChange1(field, e) {
		let fields1 = this.state.fields1;
		fields1[field] = e.target.value;
		this.setState({ fields1 });
	}

	handleChange2(field, e) {
		let fields2 = this.state.fields2;
		fields2[field] = e.target.value;
		this.setState({ fields2 });
	}

	handleChange3(field, e) {
		let fields3 = this.state.fields3;
		fields3[field] = e.target.value;
		this.setState({ fields3 });
	}
	render(props) {
		return (
			<div class="form">
				<table>
					<tr>
						<div className="container1">
							<fieldset>
								<form action="http://localhost:8000/VIEW" method="post">
									<legend>
										<span className="number">1</span> VIEW FACULTY TIMETABLE
									</legend>
									<br />
									Faculty Name *:
									<input
										type="text"
										name="fid0"
										placeholder="Faculty id *"
										onChange={this.handleChange1.bind(this, 'fid0')}
									/>
									Sem *:
									<select
										id="lang"
										name="s1"
										onChange={this.handleChange1.bind(this, 's1')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="select">Select a SEM</option>

										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
									</select>
									<br />
									<input type="submit" Value="VIEW" />
								</form>{' '}
							</fieldset>
						</div>
					</tr>
					<tr>
						<div className="container2">
							{' '}
							<fieldset>
								<form action="http://localhost:8000/INSERT" method="POST">
									<legend>
										<span className="number">2</span>INSERT FACULTY TIME TABLE
									</legend>
									<br />
									Faculty Id *:
									<input
										type="text"
										name="fid1"
										placeholder="Faculty id *"
										onChange={this.handleChange2.bind(this, 'fid1')}
									/>
									Faculty Name*:
									<input
										type="text"
										name="fn1"
										placeholder="Faculty name *"
										onChange={this.handleChange2.bind(this, 'fn1')}
									/>
									Year *:
									<select
										id="lang"
										name="year1"
										onChange={this.handleChange2.bind(this, 'year1')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="select">Select a YEAR</option>

										<option value="2019">2019</option>
									</select>
									<br />
									Sem *:
									<select
										id="lang"
										name="s2"
										onChange={this.handleChange2.bind(this, 's2')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="select">Select a SEM</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
									</select>
									<br />
									Day *:
									<select
										id="lang"
										name="d1"
										onChange={this.handleChange2.bind(this, 'd1')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="select">Select a DAY</option>

										<option value="Monday">Monday</option>
										<option value="Tuesday">Tuesday</option>
										<option value="Wednesday">Wednesday</option>
										<option value="Thursday">Thursday</option>
										<option value="Friday">Friday</option>
									</select>
									<br />
									<h4>Enter Time Table</h4>
									First Hour *:
									<input
										type="text"
										name="first1"
										placeholder="First Hour *"
										onChange={this.handleChange2.bind(this, 'first1')}
									/>
									Second Hour *:
									<input
										type="text"
										name="second1"
										placeholder="Second Hour *"
										onChange={this.handleChange2.bind(this, 'second1')}
									/>
									Third Hour *:
									<input
										type="text"
										name="third1"
										placeholder="Third Hour *"
										onChange={this.handleChange2.bind(this, 'third1')}
									/>
									Fourth Hour *:
									<input
										type="text"
										name="fourth1"
										placeholder="Fourth Hour *"
										onChange={this.handleChange2.bind(this, 'fourth1')}
									/>
									Fifth Hour *:
									<input
										type="text"
										name="fifth1"
										placeholder="Fifth Hour *"
										onChange={this.handleChange2.bind(this, 'fifth1')}
									/>
									Sixth Hour *:
									<input
										type="text"
										name="sixth1"
										placeholder="Sixth Hour *"
										onChange={this.handleChange2.bind(this, 'sixth1')}
									/>
									Seventh Hour *:
									<input
										type="text"
										name="seventh1"
										placeholder="Seventh Hour *"
										onChange={this.handleChange2.bind(this, 'seventh1')}
									/>
									Eighth Hour *:
									<input
										type="text"
										name="eigth1"
										placeholder="Eight Hour *"
										onChange={this.handleChange2.bind(this, 'eigthh1')}
									/>
									Ninth Hour *:
									<input
										type="text"
										name="nineth1"
										placeholder="Nine Hour *"
										onChange={this.handleChange2.bind(this, 'nineth1')}
									/>
									<input type="submit" Value="INSERT" />
								</form>{' '}
							</fieldset>
						</div>
					</tr>
					<tr>
						<div className="container3">
							{' '}
							<fieldset>
								<form action="http://localhost:8000/MODIFY" method="post">
									<legend>
										<span className="number">3</span>MODIFY FACULTY TIME TABLE
									</legend>
									<br />
									Faculty Name *:
									<input
										type="text"
										name="fid2"
										placeholder="Faculty id *"
										onChange={this.handleChange3.bind(this, 'fid2')}
									/>
									Year *:
									<select
										id="lang"
										name="year2"
										onChange={this.handleChange3.bind(this, 'year2')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="select">Select a YEAR</option>

										<option value="2019">2019</option>
									</select>
									<br />
									Sem *:
									<select
										id="lang"
										name="s3"
										onChange={this.handleChange3.bind(this, 's3')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
									</select>
									<br />
									Day *:
									<select
										id="lang"
										name="d2"
										onChange={this.handleChange3.bind(this, 'd2')}
										style={{
											borderRadius: '4px',
											width: '100%',
											backgroundColor: 'rgb(158, 151, 151)'
										}}
									>
										<option value="select">Select a DAY</option>

										<option value="Monday">Monday</option>
										<option value="Tuesday">Tuesday</option>
										<option value="Wednesday">Wednesday</option>
										<option value="Thursday">Thursday</option>
										<option value="Friday">Friday</option>
									</select>
									<br />
									<h4>Enter Time Table</h4>
									First Hour *:
									<input
										type="text"
										name="first2"
										placeholder="First Hour *"
										onChange={this.handleChange3.bind(this, 'first2')}
									/>
									Second Hour *:
									<input
										type="text"
										name="second2"
										placeholder="Second Hour *"
										onChange={this.handleChange3.bind(this, 'second2')}
									/>
									Third Hour *:
									<input
										type="text"
										name="third2"
										placeholder="Third Hour *"
										onChange={this.handleChange3.bind(this, 'third2')}
									/>
									Fourth Hour *:
									<input
										type="text"
										name="fourth2"
										placeholder="Fourth Hour *"
										onChange={this.handleChange3.bind(this, 'fourth2')}
									/>
									Fifth Hour *:
									<input
										type="text"
										name="fifth2"
										placeholder="Fifth Hour *"
										onChange={this.handleChange3.bind(this, 'fifth2')}
									/>
									Sixth Hour *:
									<input
										type="text"
										name="sixth2"
										placeholder="Sixth Hour *"
										onChange={this.handleChange3.bind(this, 'sixth2')}
									/>
									Seventh Hour *:
									<input
										type="text"
										name="seventh2"
										placeholder="Seventh Hour *"
										onChange={this.handleChange3.bind(this, 'seventh2')}
									/>
									Eighth Hour *:
									<input
										type="text"
										name="eigth2"
										placeholder="Eight Hour *"
										onChange={this.handleChange3.bind(this, 'eigth2')}
									/>
									Ninth Hour *:
									<input
										type="text"
										name="nineth2"
										placeholder="Nine Hour *"
										onChange={this.handleChange3.bind(this, 'nineth2')}
									/>
									<input type="submit" Value="MODIFY" />
								</form>{' '}
							</fieldset>
						</div>
					</tr>
				</table>
			</div>
		);
	}
}

export default Faculty;
