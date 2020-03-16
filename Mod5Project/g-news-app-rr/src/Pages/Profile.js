import React from 'react'
// import {useSelector, useStore} from 'react-redux'
// import { loginForm } from './Login.js'
import {useEffect, useState}  from 'react'
import { useSelector } from 'react-redux';
import {storage} from "../Firebase/index"
import { USERS_URL } from '../redux/actions';
import axios from 'axios';
import swal from 'sweetalert';

// import state from 'sweetalert/typings/modules/state'
// import {useSelector} from "react-redux"
export const Profile = (props) => {
  // debugger
  const allInputs = {imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
  // const user = useSelector(user => user)
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
   const [state, setState] = useState(props)
  //  const [isToggled, setIsToggled] = useState(true)
   useEffect(() => {
     setState(props)
   }, [props])
  console.log(props)
  // console.log(isToggled)
  console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }
const handlePatch = async (e) => {
  const patchUrl = USERS_URL+`/${props.user.id}`
  const params = {
    avatar: imageAsUrl.imgUrl
  }
  const result = await axios.patch(
    patchUrl, params
  )
  setState(result.data)
}

  
  
const handleFireBaseUpload =  (e) => {
  e.preventDefault()
  const patchUrl = USERS_URL+`/${props.id}`
  console.log('start of upload')
// async magic goes here...
if(imageAsFile === '' ) {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
       .then(fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
       })
       console.log(imageAsUrl)
    })
}


   const { username, email, avatar } = props
    console.log(props.id)
   const login = username
   const login_email = email
   
   const text = login && login_email ? (<div className="profile">
      
      <img src={avatar} alt="image_tag" className="image_tag" />
      <h1
      className="name">Welcome {username}!</h1>
      <p
      className="email">Your email is: {email}</p>
      <form onSubmit={handleFireBaseUpload}>
        <input 
// allows you to reach into your file directory and upload image to the browser
          className="custom-file-input"
          type="file"
          onChange={handleImageAsFile}
        />
        <button className="button"
        onClick={handlePatch}>Upload</button>
      </form>
   </div>) :(<h1>Nobody is logged in</h1>)

   console.log(imageAsUrl)
   console.log(props)
    
    return (
        <div>
          {text}
        </div>
    )
}

export default Profile
