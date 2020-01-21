import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import userActions from '../redux/actions.js';
import Axios from 'axios';
import { BASE_URL } from '../redux/actions'
import swal from 'sweetalert';

export const SearchBar = (props) => {
    const user  = useSelector(state =>state.login.user)
    const dispatch = useDispatch();
    const [query, setQuery] = useState("")
    // const [url, setUrl] = useState("")
    // const [userState, setUserState ] = useState({user: user
    // })
    const [queryRender, setQueryRender] = useState({
    userQuery: []    
    })
    
//    useEffect(() => {
//     setUserState(user)
//         }, [user])
   
    const handleSearchInputChanges = (e) => {
    setQuery(e.target.value);
  }
const postData = async () =>{
 const url = BASE_URL+`/users/${props.user.id}/searches`
 const  params = {
        query: query,
        name: query,
        user_id: `${props.user.id}`
      }
  if(query.length !== 0){

    const result =await Axios.post(
        url, params
    );setQueryRender(result.data)
  }else{
    swal("Search Field is Empty", "Please Enter Something", "error")
  }
}
//   const handleSubmit = (e) => {
      
//       e.preventDefault();
      
      
//       history.push('/')  
//   }
  

console.log(queryRender)
// console.log(userState)
//   const resetInputField = () => {
//     setQuery("")
//     }

//   const callSearchFunction = (e) => {
//     e.preventDefault();
//     props.search(query);
//     resetInputField();
//   }
  const callSearchFunction = (e) => {
    e.preventDefault();
    // const { history } = props
    if(query !== null){props.search(query);
    postData();
    setQuery("")}
    else{
      swal("Search Bar is empty", "Please Enter Something", "error")
    }
  }

console.log(query)


    return (
        <form className="search"
        // onSubmit={handleSubmit}
        >
        <input
          className="searchTerm"
          value={query}
          onChange={handleSearchInputChanges}
          type="text"
           placeholder="What Are You Searching For?"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH"
        className="searchButton"
        // className ="fa fa-search"
        />
      </form>
    )
}

export default SearchBar