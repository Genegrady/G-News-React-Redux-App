import {combineReducers} from 'redux'
import newsReducer from './newsReducer'
import loginReducer from './loginReducer'
import queryReducer from './queryReducer'

export default combineReducers({
    news: newsReducer,
    login: loginReducer,
    query: queryReducer
})