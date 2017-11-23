/**
 * Pretty simple routing class to allow for navigation between pages
 * Since I'm not allowed to use a proper react-router, I've written this little class to handle client-side routing
 */

import React from "react";
import Home from "./scenes/Home";
import Error from "./scenes/Error";
import _ from "lodash";
import history from "history";

let pageClasses = {
	"/": Home,
};

export default class Router {

	/**
	 * Returns a scene for a given URL
	 * @param url
	 * @returns {XML}
	 */
	static returnSceneForUrl(url) {
		// Return the page if matches the URL
		if (Object.keys(pageClasses).indexOf(url) > -1) {
			let Page = pageClasses[url];
			return <Page/>;
		}

		return <Error/>;
	}
}


/**
 * Wrapper for an HTML link tag to allow for client-side navigation without refreshing the page
 */
export class Link extends React.Component {

	/**
	 * Handles clicks on the link
	 * @param event
	 */
	handleClick(event) {
		let target = event.target;
		event.preventDefault();
		history.push(target.href);
	}

	render() {
		let props = _.pickBy(this.props, (value, key) => {
			return key !== "children";
		});

		return (
			<a {...props} onClick={this.handleClick.bind(this)}>
				{this.props.children}
			</a>
		);
	}

}

