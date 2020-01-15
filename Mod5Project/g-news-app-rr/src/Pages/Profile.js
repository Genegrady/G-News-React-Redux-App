import React from 'react'
// import {useSelector, useStore} from 'react-redux'
// import { loginForm } from './Login.js'
import {useEffect, useState}  from 'react'
// import state from 'sweetalert/typings/modules/state'
// import {useSelector} from "react-redux"
export const Profile = (props) => {
  // debugger
   const [state, setState] = useState(props)
  //  const [isToggled, setIsToggled] = useState(true)
   useEffect(() => {
     setState(props)
   }, [props])
  console.log(props.articles)
  // console.log(isToggled)
   const { username, email } = props

   const login = username
   const login_email = email
   
   const text = login && login_email ? (<div>
      <h1>You are logged in as {username}</h1>
      <p>Your email is: {email}</p>
   </div>) :(<h1>Nobody is logged in</h1>)

   console.log(props.id)
    
    return (
        <div>
          {text}
        </div>
    )
}

export default Profile
