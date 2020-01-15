import React, { Component, Fragment } from 'react'
import SearchBar from '../components/SearchBar'
import NewsList from '../containers/NewsList'
import { EVERYTHING_API_URL,QUERY, BASE_API_URL, USERS_URL, BASE_URL, API_KEY } from '../redux/actions';
import Search from '../components/Search'
import axios from 'axios'

export class SearchContainer extends Component {
   

  constructor(props) {
      super(props)
      this.state ={
          articles: this.props.articles,
          searchQueries: [],
          favoriteArticles : [],
          isToggled: false
      }
  } 
    

    search = query => {
 
//  const [state, setState] = useState( {articles: []})

 
    fetch(EVERYTHING_API_URL+QUERY+`${query}`+API_KEY)
      .then(response => response.json())
      .then(jsonResponse => {
      this.setState({articles: jsonResponse.articles})
      })
 
  	};

    fetchSearches = async () => {
        const url = BASE_URL+`/users/${this.props.id}/searches`
            
        const result = await axios(
            url,
        );

        if(localStorage.token){
        this.setState({
            searchQueries: result.data
        })
        }
    }

    fetchFavoriteArticles = async () => {
        const url = USERS_URL+`/${this.props.id}/news`
        const result = await axios(
            url,
        )
        this.setState({
            articles: result.data
        })
    }

    handleOnClick = (e) => {
        e.preventDefault()
        this.fetchFavoriteArticles()
    }
    
    
    // deleteSearch = async () => {
    //     const url = BASE_URL+`/users/${this.props.id}/searches/${query.id}`
    //     const result = await axios.delete(
    //         url
    //     )
    //     this.setState({
    //         searchQueries: result.data
    //     })
    // }
    getSearchId =() => {
        this.state.searchQueries.map(query=> query)
    }
   
    
    

    componentDidMount() {
            this.fetchSearches()
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.articles !== this.state.articles){
            this.fetchSearches()
        }
        else if(prevState.searchQueries !== this.state.searchQueries){
            
        }
    }
    

    getDerivedStateFromProps(nextProps, prevState){
        if(prevState.searchQueries !== this.state.searchQueries){
            return  this.fetchSearches(); 
            // return this.setState({searchQueries: nextProps.searchQueries}) 
           
        }
    }
    
    sendQueriesToRenderSearch = () => {
        return this.state.searchQueries.map(query=>
        <Search query={query} key={query.id} searchQueries={this.state.searchQueries} user={this.props}fetchSearches={this.fetchSearches} search={this.search}/>)
    }
    
    


    render() {
        console.log(this.getSearchId)
        return (
            <Fragment>
            
            <SearchBar callSearchFunction={this.props.callSearchFunction}
            search={this.search}
            user={this.props}/>
            <div className="sidebar">
                <h1>Saved Searches</h1>
                {this.sendQueriesToRenderSearch()}
            </div>
            <Fragment>
            <div onClick={this.fetchFavoriteArticles}>
                <h1>Favorite Articles</h1>
            </div>
            <div className="rightside">

            {this.state.articles.length === 0 ?
            <NewsList {...this.props}/>:
            <NewsList articles ={this.state.articles} />
            }
            </div>
            </Fragment>
           


            </Fragment>
        )
    }
}

export default SearchContainer
