import React from 'react'
// import useEffect from 'react'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify';
import { EVERYTHING_API_URL,QUERY, BASE_API_URL, BASE_URL, API_KEY } from '../redux/actions';
import axios from 'axios'
import swal from 'sweetalert'
import 'react-sharingbuttons/dist/main.css'
import { Facebook, Twitter, Email } from 'react-sharingbuttons'

const Article = (props) => {
  // console.log(props.article)
  const {author, urlToImage, publishedAt, title, description,url, content} = props.article

  // const handleOnClick = (e) => {
  //   return <Linkify>{url}</Linkify>
  // }

  const postData = async () =>{
 const URL = BASE_URL+`/users/${props.user_id}/news`
 const  params = {
        author:author,
        urlToImage: urlToImage,
        user_id: `${props.user_id}`,
        publishedAt: publishedAt,
        description: description,
        url: url,
        content: content
      }
    if(localStorage.token){const result =await axios.post(
        URL, params
    )};if(localStorage.token){swal("Added to Favorite Articles","Great Choice!", "success")}
    else{swal("No User Found", "Please Login", "error")};

}

console.log(props.user_id)
  
    return (
            <div className="card">
                <button
                className="favorite_button"
                onClick={postData}><img src='https://i.pinimg.com/originals/3d/65/db/3d65dbcecc72931a3b7a45a70d291892.png' alt ="star"/></button>
                <img src={urlToImage} alt={url}/>
                <p>Author: {author}</p>
                <p>Published: {publishedAt}</p>
                <Linkify>
                 <h2>{title}</h2>
                <p>{url}</p>
                </Linkify>
               
                <h3>{description}</h3>
                <p>{content}</p>
                <div className="link_share">
                    <Email url={url} subject="nice subject" />
                    <Facebook url={url} />
                     <Twitter url={url} shareText={"Check This Out"} />
                </div>
            </div>
      
    )
}



export default Article
