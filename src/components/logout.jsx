import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class logout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	logout = () => {
		sessionStorage.clear();
		window.history.pushState(null, 'logout', '/');
		window.location.reload();
	};
	render() {
		return (
			<button style={{ marginLeft: '80%', marginTop: '8%' }} class="btn btn-danger" onClick={this.logout}>
				Logout
			</button>
		);
	}
}

export default logout;
