import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from './firebase'; // Assuming you have a firebase.js file where firebase is initialized

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPassword = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => navigate('/'))
      .catch((error) => alert(error.message));
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then(() => navigate('/'))
      .catch((error) => alert(error.message));
  };

  const registerWithEmailAndPassword = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => navigate('/'))
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo' src='https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' alt='' />
      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type='submit' onClick={signInWithEmailAndPassword} className='loginSignin_button'>Sign In</button>
          <button type='button' onClick={signInWithGoogle} className='loginGoogle_button'>Sign In with Google</button>

        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button onClick={registerWithEmailAndPassword} className='loginRegister_button'>Create your Amazon Account</button>

      </div>
    </div>
  );
}

export default Login;
