import React, { Component } from 'react'
import Article from '../components/Article'
import uuid from 'uuid'
import {useEffect, useState} from 'react'



const  NewsList =(props)=> {

const [state, setState] = useState(props)
// const {user} = props
console.log(props.id) 

useEffect(() => {
    setState(props);
  }, [props]);
// const {articles} = state.articles
 let uid = uuid
 const getArticles = () => {
     return state.articles.map(
         article=><Article article={article} key={uid} user_id={props.id} /> 
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
