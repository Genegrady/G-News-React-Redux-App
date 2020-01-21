import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

export const Nav = () => {
 
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
    
      <Link to="/">
        {<img src={"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=w300"} alt="header_image"/>}
        </Link>
      <Link className ="navbar"to="/signup">Signup</Link>
      <Link className ="navbar"to="/login">Login</Link>
      
      {/* <Link to="/profile">Profile</Link> */}
    </nav>
  );
};
export const NavLog = (props) => {
   const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
    
  };
    return (
        
     <nav style={{ display: 'flex', justifyContent: 'center' }}>
    
      <Link to="/">
        {<img src={"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=w300"} alt="header_image"/>}
        </Link>
        <Link className ="navbar" to="/" onClick={handleLogout}>
        Logout
      </Link>
       </nav>
    )
}



export default {Nav, NavLog};