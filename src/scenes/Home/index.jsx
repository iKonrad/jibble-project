import React from 'react';
import { connect } from 'react-redux';
import * as AppActions from 'store/modules/appModule';
import Card from 'components/app/Card';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			loaded: false,
		};
	}

	componentWillMount() {
		this.loadData();
	}

	loadData() {
		let state = this.state;
		state.loaded = false;
		this.setState(state);

		Promise.all([
			this.props.dispatch(AppActions.loadAlbums()),
			this.props.dispatch(AppActions.loadPosts()),
			this.props.dispatch(AppActions.loadUsers())
		]).then(() => {
			let state = this.state;
			state.loaded = true;
			this.setState(state);
		})
	}



	render () {
		let cards = [];

		if (this.props.app.entries.length > 0) {
			cards = this.props.app.entries.map((obj, i) => {
				return <Card key={`card-${i}`} data={obj}/>
			});
		}

		return (
			<div className="container">
				<div className="page-header">
					<h1>Jibble Test Project</h1>
					<p>A little test project to demonstrate the usage of React.js, Redux and <code>redux-thunk</code> library</p>
					<p>To delete a post, click on the delete button. You can also change the post title by clicking on it and clicking <code>ENTER</code> when you're done.</p>
					<a className="btn btn-link" onClick={ this.loadData.bind(this) }>Reload data</a>
				</div>
				<div className="col col-xs-12 col-md-8 col-md-offset-2">
					<div className="results">
						{ this.state.loaded ? <h3>{ this.props.app.entries.length } results</h3> : "" }
						{ this.state.loaded ? cards : <div className="text-center">Fetching data...</div> }
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		app: state.app
	}
};

export default connect(mapStateToProps)(Home);