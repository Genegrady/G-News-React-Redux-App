import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions.js';

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    email: '',
    username: '',
    password: ''
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    // debugger
    dispatch(userActions.signupNewUser(signupForm));
    // debuggerx
    history.push('/');
  };

  // Destructuring keys from our local state to use in the form
  const { username, password, email } = signupForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password(min 8 characters)"
      />
      <input type="submit" />
    </form>
  );
};

export default Signup;