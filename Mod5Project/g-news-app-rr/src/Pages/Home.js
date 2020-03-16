import React from 'react';
import { useSelector } from 'react-redux';
// import NewsList from '../containers/NewsList'
import SearchContainer from '../containers/SearchContainer'
// import SearchBar from '../components/SearchBar'
import { Fragment, useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios'
import { EVERYTHING_API_URL,QUERY, BASE_API_URL, BASE_URL, API_KEY } from '../redux/actions';

// import swal from 'sweetalert';




export const Home = () => {
// const dispatch = useDispatch()
const [articleState, setArticleState] = useState({articles: []})
const [query, setQuery] = useState("")
const user = useSelector(state => state.user);
// const [userState, setUserState] =useState(user)
// const POST_SEARCH_URL = BASE_URL+`users/${user}/searches`

// const [search, setSearch] = useState('');
const [url, setUrl] = useState(
   BASE_API_URL+API_KEY,
  );


useEffect(() => {
    const fetchData =async () => {
        const result = await axios(
       url,
    );
    setArticleState(result.data)
    }
    fetchData()
}, [query])

// useEffect(() => {
//     setUserState(user)
// }, [user])



console.log(user)

    // const mapOutUser = () => {
    //      return user.map(u =>{
    //        return <SearchContainer className="search_container" user ={u.user} searches ={u.searches} news={u.news} {...state} {...query} />
    //     })
    // }
    

 



//  const handleSearchInputChanges = (e) => {
//     setQuery(e.target.value);
//   }


// console.log(user)
// debugger
// console.log(userState)
// console.log(setQuery)
// console.log(state.articles)
// console.log(search())

        return ( 
           
          
             
            <Fragment>
                {/* <Profile {...userState}{...state}/> */}
                {/* <div>{text}</div> */}
                < SearchContainer className="search_container" {...articleState} {...query} 
                {...user} 
                />
                {/* {mapOutUser()} */}
                {/* < NewsList className="news_container" {...state}/> */}
               
            </Fragment>
        )
    

}





    // componentDidMount() {
    //     const {fetchNews} = this.props
    //     fetchNews();
    // }
    

        



export default Home



    
    
 
