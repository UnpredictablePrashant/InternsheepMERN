import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import Toast from '../utils/Toast';
import Format from '../utils/Format';

const baseUrl = process.env.REACT_APP_SERVER_URL;
const UserContext = createContext(null);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);

    // useEffect(() => {
    //     if (userDetails != null) {

    //         const updatedUserDetails = { ...userDetails, dob: Format.toDateString(userDetails.dob) };
    //         setUserDetails(updatedUserDetails);
    //     }

    // }, [userDetails]);


    const [loading, setLoading] = useState(false);
    const { getJwtToken, user } = useAuth()

    useEffect(() => {
        console.log('userDetails :', userDetails);
    }, [userDetails])

    const fetchUserDetails = async () => {
        setLoading(true);
        try {

            const jwt = getJwtToken()

            const headers = {
                'Authorization': `Bearer ${jwt}`
            };
            console.log('headers :', headers);

            const response = await axios.post(`${baseUrl}/user/profile`, {}, { // Second argument is the request body, use an empty object if none
                headers: headers,
            });

            if (response.status === 200) {
                const profile = response.data.profile;
                setUserDetails(profile);
                return profile;
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
            Toast.failure(error.response?.data?.message || 'Failed to fetch user details');
        } finally {
            setLoading(false);
        }

    };


    const updateEducation = async (newEducation) => {
        console.log('newEducation :', newEducation);
        // setUserDetails(...userDetails, ...newEducation) 

        setLoading(true);

        try {
            const jwt = getJwtToken();
            console.log('jwt:', jwt);

            const headers = {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'  // Explicitly set content type
            };

            const response = await axios.post(`${baseUrl}/user/profile/education`,
                JSON.stringify(newEducation),  // Stringify the data
                {
                    headers: headers,
                    // Prevent axios from transforming the data
                }
            );

            console.log('response:', response);

            if (response.status === 200) {
                setUserDetails(response.data);
                Toast.success('Profile updated successfully');
                return response.data;
            }
        } catch (error) {
            console.error('Error updating user details:', error);
            // Log more detailed error information
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            }
            Toast.failure(error.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }

    }


    const updateUserDetails = async (newDetails) => {
        setUserDetails(newDetails)
        console.log('newDetails :', newDetails);


        setLoading(true);

        try {
            const jwt = getJwtToken();
            console.log('jwt:', jwt);

            const headers = {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'  // Explicitly set content type
            };

            const response = await axios.post(`${baseUrl}/user/profile`,
                JSON.stringify(newDetails),  // Stringify the data
                {
                    headers: headers,
                    // Prevent axios from transforming the data
                }
            );

            console.log('response:', response);

            if (response.status === 200) {
                setUserDetails(response.data);
                Toast.success('Profile updated successfully');
                return response.data;
            }
        } catch (error) {
            console.error('Error updating user details:', error);
            // Log more detailed error information
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            }
            Toast.failure(error.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    const updatePassword = async (userId, currentPassword, newPassword) => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/users/${userId}/change-password`, {
                currentPassword,
                newPassword
            });
            if (response.status === 200) {
                Toast.success('Password updated successfully');
                return true;
            }
        } catch (error) {
            console.error('Error updating password:', error);
            Toast.failure(error.response?.data?.message || 'Failed to update password');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const updateProfilePicture = async (userId, imageFile) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('profilePicture', imageFile);

            const response = await axios.post(
                `${baseUrl}/users/${userId}/profile-picture`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                setUserDetails(prev => ({
                    ...prev,
                    profilePicture: response.data.profilePicture
                }));
                Toast.success('Profile picture updated successfully');
                return response.data.profilePicture;
            }
        } catch (error) {
            console.error('Error updating profile picture:', error);
            Toast.failure(error.response?.data?.message || 'Failed to update profile picture');
        } finally {
            setLoading(false);
        }
    };

    const updateNotificationPreferences = async (userId, preferences) => {
        setLoading(true);
        try {
            const response = await axios.patch(
                `${baseUrl}/users/${userId}/notifications`,
                preferences
            );
            if (response.status === 200) {
                setUserDetails(prev => ({
                    ...prev,
                    notificationPreferences: response.data.notificationPreferences
                }));
                Toast.success('Notification preferences updated successfully');
                return response.data.notificationPreferences;
            }
        } catch (error) {
            console.error('Error updating notification preferences:', error);
            Toast.failure(error.response?.data?.message || 'Failed to update notification preferences');
        } finally {
            setLoading(false);
        }
    };

    const value = {
        userDetails,
        setUserDetails,
        updateEducation,
        loading,
        fetchUserDetails,
        updateUserDetails,
        updatePassword,
        updateProfilePicture,
        updateNotificationPreferences
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;