import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ErrorPage from '../pages/ErrorPage';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import UserDashboard from '../pages/UserDashboard';
import { useAuthContext } from '../context/AuthContext';
import UserProvider from '../context/UserContext';

const AppRouter = () => {
    const auth = useAuthContext()
    console.log(auth)
    console.log(auth?.isAuthorised)

    return (
        <BrowserRouter>
            <GoogleOAuthProvider clientId={'228572820036-9e3q0sgffsrh0ccgfrvq9uec9io8jdig.apps.googleusercontent.com'}>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={auth?.isAuthorised ? <Navigate replace to={'/users/me'}/> : <Navigate replace to={'/login'}/>} />
                        <Route path="/users/me" element={auth?.isAuthorised ? <UserDashboard /> : <Navigate replace to={'/login'}/>} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </UserProvider>
            </GoogleOAuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter;