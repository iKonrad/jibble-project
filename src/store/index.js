import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './modules'

const initialState = {};
const enhancers = [];
const middleware = [
	thunk,
];

if (process.env.NODE_ENV !== 'production') {
	const devToolsExtension = window.devToolsExtension

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}

	middleware.push(createLogger({
		duration: true,
		diff: true,
		collapsed: true,
	}));
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

const store = createStore(
	rootReducer,
	initialState,
	composedEnhancers
)

export default store