/**
 * Base component that displays navigation and footer
 */

import React, {Component} from 'react';
import history from "history";
import Router from "router";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: props.url,
		};
	}

	componentDidMount() {
		/* URL change listener */
		history.onChange((url) => {
			this.setState({
				url: window.location.pathname
			});
		});
	}

	render() {
		return (
			<div>
				{ Router.returnSceneForUrl(this.state.url) }
			</div>
		);
	}
}

export default App;
