import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h2 className="auth__title">Register</h2>
            <form>
                <input className="auth__input" type="text" autoComplete="off" placeholder="Name" name="name" />
                <input className="auth__input" type="email"  autoComplete='off' placeholder="Email" name="email" />
                <input className="auth__input" type="password"  autoComplete="off" placeholder="Password" name="password" />
                <input className="auth__input" type="password"  autoComplete="off" placeholder="Confirm password" name="password2" />

                <button className="btn  btn-block mb-5" type="submit">
                    Start now
                </button>


                <Link
                    to='/auth/login'
                    className="link"
                >
                    Already have an account?
                </Link>
            </form>
        </>
    );
};
