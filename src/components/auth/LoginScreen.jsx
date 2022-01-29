import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";


import isEmail from 'validator/lib/isEmail';


import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startLoginGoogle } from '../../actions/auth';
import {replaceInOut} from '../../helpers/auth';



import 'animate.css'
export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.ui);


  const [formValues, handleInputChange] = useForm({
    email: 'aaldiitoo@gmail.com',
    password: '200301aldo'
  });
  const {email, password } = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    if(!isEmail(email))
    {
      console.error("Invalid email");
      return;
    }

    dispatch(startLoginEmailPassword(email, password));
  }
  const handleGoogleLogin = () => {
    dispatch(startLoginGoogle());
  }

  return (
    <>
      <h2 className="auth__title">Login</h2>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={handleInputChange} className="auth__input" type="email" autoComplete="off" placeholder="Email" name="email" />
        <input value={password} onChange={handleInputChange} className="auth__input" type="password" placeholder="Password" name="password" />

        <button disabled={isLoading} className="btn btn-primary btn-block mb-1" type="submit">
          Login
        </button>


        <div className="auth__social-networks">
          <p>Login with your fav network</p>
          <div 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text ">
              <b>Sign in with Google</b>
            </p>
          </div>
        </div>

        <Link
          to='/auth/register'
          className="link"
          onClick={replaceInOut}
        >
          Create New Account
        </Link>
      </form>
    </>
  );
};
