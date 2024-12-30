import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logout } from '../../store/actions/AuthActions';
import { isAuthenticated } from '../../store/selectors/AuthSelectors';
import { useAuth } from '../../contexts/AuthContext';

function LogoutPage(props) {

    const { logout } = useAuth()

    return (
        <>
            <Link onClick={() => { logout() }} to={""} style={{ fontSize: '.8rem', padding: '5px 1rem ' }} className="text-xs site-button">Logout</Link>
        </>
    )
}

export default LogoutPage;