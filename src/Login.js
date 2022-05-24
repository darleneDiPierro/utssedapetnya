import React from 'react';
import './style/login.css';

const Login = () => {
  return (
    <div>
      <form className='login-form'>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
