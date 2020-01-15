import { FIRST_INITIAL_FETCH} from './actions'


const initialState = {
    news: ``
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FIRST_INITIAL_FETCH:
            return {
                ...state,
                news: action.payload
            }

    
        default:
            return state 
    }
}

export const getFirstFetch = state => state.news
