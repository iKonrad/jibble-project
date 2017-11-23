import { combineReducers } from 'redux'
import appReducer from './appModule' ;

export default combineReducers({
	app: appReducer,
})