/**
 * Error component to display a 404 page
 */

import React from 'react';
import { Link } from 'router';

class Error extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h1>404 - Page not found</h1>
				</div>
				<p className="lead">This page doesn't exist. Worry not, here's a picture of my cat instead.</p>
				<img src="/images/404.jpg" alt=""/>
				<div><Link href="/" className="btn btn-primary" style={{marginTop: "10px"}}>Go to homepage</Link></div>
			</div>
		);
	}
}

export default Error;