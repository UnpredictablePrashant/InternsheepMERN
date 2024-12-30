import React, { Suspense, useEffect } from 'react';
import Index from './markup/Markup';
import { connect, useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { checkAutoLogin } from './services/AuthService';
import { getLocalId, isAuthenticated } from './store/selectors/AuthSelectors';
import './css/plugins.css';
import './css/style.css';
import './css/custom.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './markup/Pages/Loginpage2';
import SignUp from './markup/Pages/Register2';
import { useAuth } from './contexts/AuthContext';

//const SignUp = lazy(() => import('./markup/Pages/Register2'));
//const ForgotPassword = lazy(() => import('./markup/pages/ForgotPassword'));
/*  const Login = lazy(() => {
    return new Promise(resolve => {
    setTimeout(() => resolve(import('./markup/Pages/Loginpage2')), 500);
  });
});  */

function App(props) {

    const { user, loading } = useAuth()

    console.log('user :', user);

    return (

        <>
            <ToastContainer />
            <Suspense fallback={
                <div id="preloader">
                    <div className="sk-three-bounce">
                        <div className="sk-child sk-bounce1"></div>
                        <div className="sk-child sk-bounce2"></div>
                        <div className="sk-child sk-bounce3"></div>
                    </div>
                </div>
            }
            >
                <Index />
            </Suspense>
        </>
    );
};


export default (App);

//export default App;
