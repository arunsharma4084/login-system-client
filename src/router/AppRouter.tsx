import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ErrorPage from '../pages/ErrorPage';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import UserDashboard from '../pages/UserDashboard';
import useAuthToken from '../utils/useAuthToken';

const AppRouter = () => {
    const {authToken, setAuthToken} = useAuthToken()
    console.log(authToken)

    return (
        <BrowserRouter>
            <GoogleOAuthProvider clientId={'228572820036-9e3q0sgffsrh0ccgfrvq9uec9io8jdig.apps.googleusercontent.com'}>
                <Routes>
                    <Route path="/users/me" element={authToken ? <UserDashboard /> : <Navigate replace to={'/login'}/>} />
                    <Route path="/" element={authToken ? <UserDashboard /> : <Navigate replace to={'/login'}/>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn setAuthToken={setAuthToken} />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </GoogleOAuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter;