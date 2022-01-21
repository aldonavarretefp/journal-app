import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/Main/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import {firebase} from '../firebase/firebaseConfig';
import { Redirect } from 'react-router-dom';
import { LoadingScreen } from '../components/Main/LoadingScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
          if(user?.uid){
              dispatch(login(user.uid,user.displayName));
              setisLoggedIn(true);
          }else{
            setisLoggedIn(false);
          }
            setChecking(false);
          
        });
    }, [dispatch,setisLoggedIn,setChecking]);

    if(checking){
        return <LoadingScreen />
    }
  
  return <div>
      <Router>
            <Switch>
                <PublicRoute 
                  path="/auth" 
                  component={AuthRouter} 
                  isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                  exact 
                  path="/" 
                  component={JournalScreen} 
                  isLoggedIn={isLoggedIn}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
  </div>;
};
