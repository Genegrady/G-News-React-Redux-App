import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Pages from './Pages'
import PrivateRoute from './PrivateRoutes'
// import swal from 'sweetalert';



export const Routes = () => {
    return (
       <Switch>
           <Route path ="/signup" component = {Pages.Signup}/>
           <Route path ="/login" component = {Pages.Login}/>
           <Route path ="/" component = {Pages.Home}/>
           <PrivateRoute path ="/profile" component = {Pages.Profile}/>
       </Switch>
    )
}




export default Routes

