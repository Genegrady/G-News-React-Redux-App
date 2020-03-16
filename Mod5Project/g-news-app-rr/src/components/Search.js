import React from 'react'
import {  EVERYTHING_API_URL,QUERY,BASE_URL, API_KEY, BASE_API_URL } from '../redux/actions'
import axios from 'axios';
import {useSelector} from 'react-redux'
import { useState } from 'react'
import swal from 'sweetalert';



export const Search = (props) => {
 const articles = useSelector(state => state.articles)
 const [state, setState] = useState({articles: []})
//  const searchQuery = useSelector(state=> state.searchQuery)
 const [searchQueries, setSearchQueries] = useState(props.searchQueries)
    const deleteSearch = async () => {
        const url = BASE_URL+`/searches/${props.query.id}`
        const getUrl = BASE_API_URL + API_KEY
        const result = await axios.delete(
            url
        );
        const postData = await axios(
            getUrl
        )
         swal("Search Deleted", "Cool", "success") &&
         setState(postData.results)   
        }
        // window.location.reload()

const fetchOriginalData = async  () => {
    const url = BASE_API_URL + API_KEY
    const result = await axios(
        url,
    )
    setState(result.data)
}


   const handleClick = (e) => {
     e.preventDefault()
     deleteSearch()
    //  props.fetchSearches()
     setSearchQueries(props.searchQueries)
     fetchOriginalData()
    //  props.history.push("/")
    }

    
    

    console.log(props)
    const { query, name, } = props.query
    return (
    
            <div className="query-card"
            onClick={() => {
                props.search(query)
            }
             }>
            <h3>{name}</h3>
            <button
                className="searchButtonSide" 
                onClick={handleClick}></button>
            </div>

        
    )
}

export default Search