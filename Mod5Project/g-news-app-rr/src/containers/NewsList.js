import React, { Component } from 'react'
import Article from '../components/Article'
import uuid from 'uuid'
import {useEffect, useState} from 'react'



const  NewsList =(props)=> {

const [state, setState] = useState(props)
console.log(props) 

useEffect(() => {
    setState(props);
  }, [props]);
// const {articles} = state.articles
 let id = uuid
 const getArticles = () => {
     return state.articles.map(
         article=><Article article={article} key={id} user_id={props.user_id} /> 
     )
     debugger
 }
 
//  console.log(state.articles)
        
        return (
            <div>
                {getArticles()}
            </div>
        )
    
}

export default NewsList
