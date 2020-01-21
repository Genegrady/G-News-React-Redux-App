import React, { Component, Fragment } from 'react'
import SearchBar from '../components/SearchBar'
import NewsList from '../containers/NewsList'
import { EVERYTHING_API_URL,QUERY, BASE_API_URL, USERS_URL, BASE_URL, API_KEY } from '../redux/actions';
import Search from '../components/Search'
import axios from 'axios'
import swal from 'sweetalert';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import Profile from '../Pages/Profile'
import Weather from '../components/Weather'
import classNames from 'classnames';


export class SearchContainer extends Component {
   

  constructor(props) {
      super(props)
      this.state ={
          articles: this.props.articles,
          searchQueries: [],
          favoriteArticles : [],
          weather: []
      }
  } 
    

    search = query => {
 
//  const [state, setState] = useState( {articles: []})

 
    fetch(EVERYTHING_API_URL+QUERY+`${query}`+API_KEY)
      .then(response => response.json())
      .then(jsonResponse => {
      if(query !== ""){

      this.setState({articles: jsonResponse.articles})
      }else{
          swal("Search Field Is Empty", "Please Type Something", "error")
      }    
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
        if(localStorage.token){const result = await axios(
            url,
        )
        this.setState({
            articles: result.data
        })}else{
            debugger
            swal("No User Detected", "Please Login", )
        }
    }
    fetchWeather = async () => {
        const url = `https://api.weather.gov/zones/Feature/NYZ072/forecast`
        const result = await axios(
            url,
        );
        this.setState({
            weather: result.data.periods
        })
    }
    

    fetchTopHeadlines = async () => {
        const url = BASE_API_URL+API_KEY
        const result = await axios(
            url, 
        );
        this.setState({
            articles: result.data.articles
        })
    }
    

    handleOnClick = (e) => {
        e.preventDefault()
        this.fetchFavoriteArticles()
    }
    handleHeadlineClick = (e) => {
        e.preventDefault()
        this.fetchTopHeadlines()
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
            this.setState({
      isMenuOpened: false
    });
            this.fetchWeather();
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.articles !== this.state.articles){
            this.fetchSearches()
        }
        else if(prevState.searchQueries !== this.state.searchQueries){
            
        }
        // if(prevState.localStorage !== localStorage){
        //     this.fetchSearches()
        // }
    }
    

    getDerivedStateFromProps(nextProps, prevState){
        if(prevState.searchQueries !== this.state.searchQueries){
            return  this.fetchSearches(); 
            // return this.setState({searchQueries: nextProps.searchQueries}) 
           
        }
    }
    
    sendQueriesToRenderSearch = () => {
        return this.state.searchQueries.map(query=>
        <li >
        <Search query={query} key={query.id} searchQueries={this.state.searchQueries} user={this.props}fetchSearches={this.fetchSearches} search={this.search}/>
        </li>)
        
    }
    createWeather = () => {
        let filter = this.state.weather.filter(
            w=> w.number === 1
        )
        return filter.map(w=><li>
            <Weather weather ={w}/>
        </li>)
    }
    
    
    


    render() {
        // console.log(Date().getHours())
        return (
            <Fragment>
            
            <SearchBar callSearchFunction={this.props.callSearchFunction}
            search={this.search}
            user={this.props}/>
            <OffCanvas
                width={300}
                transitionDuration={300}
                effect={"parallax"}
                isMenuOpened={this.state.isMenuOpened}
                position={"left"}
                backgroundColor={"light-grey"}
            > 
            <OffCanvasBody
          className="bodyclass"
          style={{ fontSize: "30px" }}
          padding-top={"20%"}
        >
          {/* <button
          className="toggle_button"
          onClick={this.handleClick.bind(this)}>
             <span>
                 Toggle
                 </span> 
          </button> */}
          {/* <p>
            <a href="#" onClick={this.handleClick.bind(this)}>
              Click here
            </a>{" "}
          </p> */}
        </OffCanvasBody>
           <OffCanvasMenu 
           className="menuclass">
               <button
               className="toggle_button"
               onClick={this.handleClick}>
                   Close Menu
               </button>
            {/*  */}
           <Profile user={this.props}/>
             <div className="sidebar">
                <div className="favorite_articles"
                onClick={this.handleHeadlineClick}>
                    <h1>Top HeadLines</h1>
               </div>
                <div className="favorite_articles" 
                onClick={this.fetchFavoriteArticles}>
                    <h1>Favorite Articles</h1>
                </div>
                <div
                className="search_card_container">
                    
                <h1 
                >Saved Searches</h1>
                <ul>
                    
                {this.sendQueriesToRenderSearch()}
                </ul>
                

                </div>
               
            </div>
          
        </OffCanvasMenu>
            </OffCanvas>
           
            <Fragment>
            
            <div className="rightside">
                
            {this.state.articles.length === 0 ?
            <NewsList {...this.props}/>:
            <NewsList articles ={this.state.articles} />
            }
            </div>
             
            </Fragment>
            <Fragment className="bodyclass">
               
            <OffCanvas
                width={450}
                height={1000}
                transitionDuration={300}
                effect={"push"}
                isMenuOpened={this.state.isMenuOpened}
                position={"bottom"}
                backgroundColor={"light-grey"}
                paddingTop={"50px"}
            > 
            <OffCanvasBody
          className="bodyclass"
          style={{ fontSize: "30px" }}
          padding-top={"20%"}
        >
          <button
          className="toggle_button"
          style ={{scrollSnapCoordinate: "10px"}}
          onClick={this.handleClick.bind(this)}>
             <span>
                 Menu
                 </span> 
          </button>
          {/* <p>
            <a href="#" onClick={this.handleClick.bind(this)}>
              Click here
            </a>{" "}
          </p> */}
        </OffCanvasBody>
           <OffCanvasMenu 
           className="menuclass">
               {/* <button
               onClick={this.handleClick}>
                   Close Menu
               </button> */}
            {/*  */}
            <ul className="weather">
                {this.createWeather()}
               </ul>
          
        </OffCanvasMenu>
            </OffCanvas>
            </Fragment>
            
            </Fragment>
            
        )
        
    }
    handleClick=()=> {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}

export default SearchContainer
