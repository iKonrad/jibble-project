const SET_USERS = "@@app/SET_USERS";
const SET_ALBUMS = "@@app/SET_ALBUMS";
const SET_POSTS = "@@app/SET_POSTS";
const REMOVE_POST = "@@app/REMOVE_POST";
const UPDATE_POST_TITLE = "@@app/UPDATE_POST_TITLE";

const MAX_ENTRIES = 30;

const initialState = {
	entries: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		/**
		 * Inserts random 30 users into the state
		 */
		case SET_USERS:
			let newState = { ...state };
			for (let i = 0; i < MAX_ENTRIES; i++) {
				newState.entries[i] = {
					...newState.entries[i],
					user: action['users'][Math.floor(Math.random() * (action['users'].length - 1))]
				}
			}
			return newState;

		/**
		 * Inserts random 30 albums into the state
		 */
		case SET_ALBUMS:
			newState = { ...state };
			for (let i = 0; i < MAX_ENTRIES; i++) {
				newState.entries[i] = {
					...newState.entries[i],
					album: action['albums'][Math.floor(Math.random() * (action['albums'].length - 1))]
				}
			}
			return newState;

		/**
		 * Inserts random 30 posts into the state
		 */
		case SET_POSTS:
			newState = { ...state };
			for (let i = 0; i < MAX_ENTRIES; i++) {
				newState.entries[i] = {
					...newState.entries[i],
					post: action['posts'][i]
				}
			}
			return newState;

		/**
		 * Removes a post for a given post ID from the state
		 */
		case REMOVE_POST:
			return {
				entries: state.entries.filter(obj => obj.post.id !== action.id)
			};

		/**
		 * Updates post title in the state for a given ID
		 */
		case UPDATE_POST_TITLE:
			return {
				entries: state.entries.map((obj) => {
					if (obj.post.id === action.id) {
						obj.post.title = action.title;
					}
					return obj;
				})
			};

		default:
			return state;
	}
}

/**
 * Loads posts from the JSON API and passes it into the store
 * @returns {function(*)}
 */
export function loadPosts() {
	return (dispatch) => {
		return fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
			return response.json();
		}).then((posts) => {
			return dispatch({
				type: SET_POSTS,
				posts
			});
		});
	}
}

/**
 * Loads albums from the JSON API and passes it into the store
 * @returns {function(*)}
 */
export function loadAlbums() {
	return (dispatch) => {
		return fetch(`https://jsonplaceholder.typicode.com/albums`).then((response) => {
			return response.json();
		}).then((albums) => {
			return dispatch({
				type: SET_ALBUMS,
				albums
			});
		});
	}
}

/**
 * Loads users from the JSON API and passes it into the store
 * @returns {function(*)}
 */
export function loadUsers() {
	return (dispatch) => {
		return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
			return response.json();
		}).then((users) => {
			return dispatch({
				type: SET_USERS,
				users
			});
		});
	}
}

/**
 * Removes the post from the state for a given post ID
 * @param id
 * @returns {{type: string, id: *}}
 */
export function removePost(id) {
	return {type: REMOVE_POST, id}
}


export function updatePostTitle(id, title) {
	return {type: UPDATE_POST_TITLE, id, title}
}
