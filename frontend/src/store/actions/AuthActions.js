import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
    forgotPassword
} from '../../services/AuthService';
import swal from "sweetalert";


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const FORGOT_PASSWORD_CONFIRMED_ACTION = '[forgot password action] confirmed forgot password';
export const FORGOT_PASSWORD_FAILED_ACTION = '[forgot password action] failed forgot password';

export function forgotPasswordAction(email) {

    console.log('yay')
    return (dispatch) => {
        dispatch(loadingToggleAction(true));

        forgotPassword(email)
            .then((response) => {
                dispatch(forgotPasswordConfirmedAction(response.data));
                dispatch(loadingToggleAction(false));
                swal('A Reset Password Mail has been sent.')
            })
            .catch((error) => {
                console.log('error :', error);
                const errorMessage = formatError(error.response.data);
                dispatch(forgotPasswordFailedAction(errorMessage));
                dispatch(loadingToggleAction(false));
            });
    };
}

export function signupAction(email, password, history) {
    return (dispatch) => {
        signUp(email, password)
            .then((response) => {
                saveTokenInLocalStorage(response.data);
                runLogoutTimer(
                    dispatch,
                    response.data.expiresIn * 1000,
                    history,
                );
                dispatch(confirmedSignupAction(response.data));
                history.push('/home');
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(signupFailedAction(errorMessage));
            });
    };
}

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, history, role) {
    return (dispatch) => {
        login(email, password)
            .then((response) => {
                saveTokenInLocalStorage(response.data);
                runLogoutTimer(
                    dispatch,
                    response.data.expiresIn * 1000,
                    history,
                );
                dispatch(loginConfirmedAction(response.data));
                if (role == 'student') {
                    history.push('/student-profile');
                } else if (role == 'org') {
                    history.push('/company-profile');
                }
            })
            .catch((error) => {
                //console.log(error);
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}

export function forgotPasswordConfirmedAction(message) {
    return {
        type: FORGOT_PASSWORD_CONFIRMED_ACTION,
        payload: message,
    };
}

export function forgotPasswordFailedAction(message) {
    return {
        type: FORGOT_PASSWORD_FAILED_ACTION,
        payload: message,
    };
}