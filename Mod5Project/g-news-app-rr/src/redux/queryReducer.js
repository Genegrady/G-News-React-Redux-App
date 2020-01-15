import { setQuery } from "./actions";

const initialState ={
    query: {}
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_QUERY':
            return{
                ...state,
                query: action.payload
            }
    
        default:
            return state
    }
}


