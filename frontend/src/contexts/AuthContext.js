// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Toast from '../utils/Toast';

const baseUrl = process.env.REACT_APP_SERVER_URL;
const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing token on mount
        const token = localStorage.getItem('token');
        if (token) {
            const userData = parseJwt(token);
            if (userData) {
                setUser(userData);
            }
        }
        setLoading(false);
    }, []);

    const getJwtToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            return token
        }
        return null
    }

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            return null;
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post(`${baseUrl}/auth/login`, {
                email: email,
                password: password
            });

            if (res.status === 200) {
                const { token } = res.data;
                const userData = parseJwt(token);
                console.log('user :', userData);
                localStorage.setItem('token', token);
                setUser(userData);
                return userData;
            } else if (res.status === 401) {
                Toast.success('Invalid Credentials');
                return false;
            }
        } catch (error) {
            console.error('Login error:', error);
            Toast.error(error.response?.data?.message || 'Login failed');
            return false;
        }
    };

    const signup = async (email, password, role) => {
        try {
            const res = await axios.post(`${baseUrl}/auth/register`, {
                email: email,
                password: password,
                role: role
            });

            if (res.status === 201) {
                Toast.success('Registered successfully');
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Signup error:', error);
            Toast.error(error.response?.data?.message || 'Registration failed');
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        Toast.success('Logged out successfully');
    };

    // Axios interceptor for adding auth token to requests
    useEffect(() => {
        const interceptor = axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(interceptor);
        };
    }, []);

    const value = {
        user,
        loading,
        login,
        signup,
        logout,
        parseJwt,
        getJwtToken
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;