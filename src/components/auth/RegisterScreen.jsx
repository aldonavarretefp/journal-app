import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import 'animate.css';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { replaceInOut } from '../../helpers/auth';


export const RegisterScreen = () => {
    const dispatch = useDispatch();
    // const state = useSelector( state => state );// me da el estado del store
    const {msgError} = useSelector( state => state.ui );
    
    const [formValues, handleInputChange] = useForm({
        email: 'aaldiitoo@gmail.com',
        name: 'Aldo',
        password: '123456',
        password2: '123456'

    });
    const { email, name, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(!isFormValid()){
            console.log('invalid form');
            return;
        }
        dispatch(startRegisterWithEmailPasswordName(email,password,name));


    }

    const isFormValid = () => {
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '') {
            dispatch(setError('All fields are required'));
            return false;
        }
        if(!isEmail(email)) {
            console.error("Invalid email");
            dispatch(setError('Invalid email'));
            return false;
        }
        if(password.length < 6) {
            console.error("Password should be at least 6 characters");
            dispatch(setError('Password should be at least 6 characters'));
            return false;
        }
        if(password !== password2) {
            console.error("Passwords do not match");
            dispatch(setError('Passwords do not match'));
            return false;
        }
        dispatch(removeError());
        return true;
    }
    return (
        <>
            <h2 className="auth__title">Register</h2>
            {msgError && <div className="auth__alert-error animate__animated animate__swing">{msgError}</div>}
            <form onSubmit={handleRegister}>
                <input onChange={handleInputChange} value={name} className="auth__input" type="text" autoComplete="off" placeholder="Name" name="name" />
                <input onChange={handleInputChange} value={email} className="auth__input" type="email"  autoComplete='off' placeholder="Email" name="email" />
                <input onChange={handleInputChange} value={password} className="auth__input" type="password"  autoComplete="off" placeholder="Password" name="password" />
                <input onChange={handleInputChange} value={password2} className="auth__input" type="password"  autoComplete="off" placeholder="Confirm password" name="password2" />

                <button className="btn  btn-block mb-5" type="submit">
                    Start now
                </button>


                <Link
                    to='/auth/login'
                    className="link"
                    onClick={replaceInOut}
                >
                    Already have an account?
                </Link>
            </form>
        </>
    );
};
