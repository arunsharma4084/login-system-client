import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ErrorPage from '../pages/ErrorPage';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import LandingPage from '../pages/LandingPage';
import UserDashboard from '../pages/UserDashboard';

const AppRouter = () => {
    return (
            <BrowserRouter>
            <GoogleOAuthProvider clientId={'228572820036-9e3q0sgffsrh0ccgfrvq9uec9io8jdig.apps.googleusercontent.com'}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/users/me" element={<UserDashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                </GoogleOAuthProvider>
            </BrowserRouter>
    )
}

export default AppRouter;