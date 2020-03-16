import { useSelector } from 'react-redux';

// Get users info



// API constants

export const BASE_URL = 'http://localhost:5000'
export const SIGNUP_URL = BASE_URL + '/signup';
export const USERS_URL = BASE_URL + '/users';
const AUTH_URL = BASE_URL + '/auth';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;
export const BASE_API_URL = `https://newsapi.org/v2/top-headlines?country=us`
export const API_KEY = `&apiKey=c2103e35167141798371ceb134b0f75d`
export const QUERY = `q=`
const SEARCH = ``
export const EVERYTHING_API_URL = `https://newsapi.org/v2/everything?`
export const FIRST_INITIAL_FETCH = 'FIRST_INITIAL_FETCH'
export const EVERYTHING_FETCH = 'EVERYTHING_FETCH'
export const SEARCH_URL = EVERYTHING_API_URL+QUERY+SEARCH+API_KEY

// 
//actions

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
})

const clearUser = () => ({
  type: 'CLEAR_USER'  
})

const setQuery = (queryObj) => ({
  type: 'SET_QUERY',
  payload: queryObj
})


export const firstInitialFetch = news =>{
  return {
    type: FIRST_INITIAL_FETCH,
    news: news
  }
}

// const postQueryToBackEnd = query => dispatch =>{
//   const userState = useSelector(state=> state.login.user)
//   const POST_SEARCH_URL = BASE_URL+`users/${userState.id}/searches`
//   const config = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({

//           query: query,
//           name: query,
//           user_id: `${userState.id}`
//         }
//         )
//     };
//     fetch(POST_SEARCH_URL, config)
//     .then(r=>r.json)
//     .then(data =>{
//         dispatch(setQuery(data.query))
//         // debugger
//         localStorage.setItem('query', data.query)
//     })
// }

const signupNewUser = newUser => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    };
    fetch(SIGNUP_URL, config)
    .then(r=>r.json)
    .then(data =>{
        dispatch(setUserAction(data.user))
        // debugger
        localStorage.setItem('token', data.token)
    }).catch(errors=>
    console.log(errors))
    // localStorage.setItem('user', setUserAction.payload)
}

const deleteUser = userID => dispatch => {
    const config = {
        method: 'DELETE'
    }
    fetch(SPECIFIC_USER_URL(userID),config)
    .then(resp => {
        dispatch(clearUser())
        localStorage.clear()
    })
   
}

const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      // debugger
      console.log(data)
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
    
    // localStorage.setItem('user', setUserAction.payload )
};

const authUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Authorization': `bearer ` +localStorage.token
    }
  };
  if(localStorage.token !== "undefined"){
  return fetch(AUTH_URL, config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
  }
};

const logoutUser = () => dispatch => {
  dispatch(clearUser());
  localStorage.clear();
};

// const setQueryAction = newQuery=> dispatch => {
//   const config ={
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newQuery)
//   };
//   fetch(POST_SEARCH_URL, config)
//   .then(resp => resp.json())
//   .then(json_resp => console.log(json_resp))
// }

// console.log(userState)





export default {
  signupNewUser,
  deleteUser,
  loginUserToDB,
  authUser,
  logoutUser,
  firstInitialFetch,
  // postQueryToBackEnd
};