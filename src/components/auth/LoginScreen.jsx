import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h2 className="auth__title">Login</h2>
      <form>
        <input className="auth__input" type="email" autoComplete="off" placeholder="Email" name="email" />
        <input className="auth__input" type="password" placeholder="Password" name="password" />

        <button className="btn btn-primary btn-block mb-1" type="submit">
          Login
        </button>


        <div className="auth__social-networks">
          <p>Login with your fav network</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>
          </div>
        </div>

        <Link
          to='/auth/register'
          className="link"
        >
          Create New Account
        </Link>
      </form>
    </>
  );
};
