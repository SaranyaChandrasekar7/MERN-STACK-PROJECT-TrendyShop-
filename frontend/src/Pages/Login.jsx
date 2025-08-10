import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPasword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      <div className="login-header">
        <p className="login-title">{currentState}</p>
        <hr className="login-divider" />
      </div>
      {currentState === 'Login' ? null : (
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="login-input" placeholder="Name" required />
      )}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="login-input" placeholder="Email" required />
      <input onChange={(e) => setPasword(e.target.value)} value={password} type="password" className="login-input" placeholder="Password" required />
      <div className="login-footer">
        <p className="login-link">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="login-link">Create account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="login-link">Login Here</p>
        )}
      </div>
      <button className="login-button">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;