import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as AppActions from 'store/modules/appModule';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
		}
	}

	removePost(event) {
		event.preventDefault();
		this.props.dispatch(AppActions.removePost(this.props.data.post.id));
	}

	toggleEdit() {
		let state = this.state;
		state.editing = !state.editing;
		this.setState(state);
	}

	updateCardTitle() {
		let updatedTitle = ReactDOM.findDOMNode(this.refs['postTitle']).value;
		this.props.dispatch(AppActions.updatePostTitle(this.props.data.post.id, updatedTitle));
	}

	renderTitle() {
		if (this.state.editing) {
			return (
				<form onSubmit={ this.toggleEdit.bind(this) }>
					<input className="results__card__input" ref="postTitle" onChange={ this.updateCardTitle.bind(this) } value={ this.props.data.post.title } />
				</form>);
		}
		return <div className="results__card__title" onClick={ this.toggleEdit.bind(this) }>{ this.props.data.post.title }</div>;
	}



	render() {
		return (
			<div className="results__card">
				{ this.renderTitle() }
				<div className="results__card__album">{ this.props.data.album.title }</div>
				<div className="results__card__footer">
					<div className="row">
						<div className="col col-xs-12">
							<div className="pull-left">
								<a href="#" className="results__card__delete" onClick={ this.removePost.bind(this) }>Delete</a>
							</div>
							<div className="pull-right">
								<div className="results__card__author">Posted by <strong>{ this.props.data.user.username }</strong></div>
							</div>
						</div>
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

export default connect(mapStateToProps)(Card);