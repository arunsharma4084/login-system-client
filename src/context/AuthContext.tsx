import React, { createContext, useState, useEffect, useContext } from "react";
import { clientAPI } from "../api/api";

interface AuthContextType {
    isAuthorised: boolean,
    setAuthentication: (authToken: string) => void
}

interface ProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType  | null>(null);

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {   
    const checkAuthentication = async () => {
        const tokenString = localStorage.getItem('token');
        if(!tokenString){
            return setIsAuthorised(false)
        }
        const authToken = JSON.parse(tokenString)
        const user = await clientAPI.get('/users/me', {headers: {Authorization: `Bearer ${authToken}`}})
        if(user) {
            setIsAuthorised(true)
            setLoading(false)
        }
    }
    
    const [isAuthorised, setIsAuthorised] = useState(false);
    const [loading, setLoading] = useState(true);

    const setAuthentication = (authToken: string) => {
        localStorage.setItem('token', JSON.stringify(authToken));
        setIsAuthorised(true)
        setLoading(false)
    }

    useEffect(() => {
        checkAuthentication()
    }, [isAuthorised]);

    const value = { isAuthorised, setAuthentication };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>

    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider;