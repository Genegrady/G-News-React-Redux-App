import {combineReducers} from 'redux'
import newsReducer from './newsReducer'
import rootReducer from './rootReducer'
import queryReducer from './queryReducer'

export default combineReducers({
    news: newsReducer,
    login: rootReducer,
    query: queryReducer
})