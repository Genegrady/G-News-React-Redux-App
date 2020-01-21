import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Pages from './Pages'
// import swal from 'sweetalert';



export const Routes = () => {
    return (
        localStorage.token ?
        <Switch>
            <Route path ="/" component = {Pages.Home}/>
        </Switch>
        :
       <Switch>
           <Route path ="/signup" component = {Pages.Signup}/>
           <Route path ="/login" component = {Pages.Login}/>
           <Route path ="/" component = {Pages.Home}/>
       </Switch>
    )
}




export default Routes

