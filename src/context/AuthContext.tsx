import React, { createContext, useState, useEffect, useContext } from "react";
import { clientAPI } from "../api/api";

interface AuthContextType {
    isAuthorised: boolean,
    setAuthentication: (authToken: string) => void,
    authToken: string
}

interface ProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType  | null>(null);

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {   
    const checkAuthentication = async () => {
        const tokenString = localStorage.getItem('token');
        if(!tokenString){
            setIsAuthorised(false)
            setLoading(false)
            return
        }
        const token = JSON.parse(tokenString)
        const user = await clientAPI.get('/users/me', {headers: {Authorization: `Bearer ${token}`}})
        if(user) {
            console.log(user)
            setIsAuthorised(true)
            setLoading(false)
        }
        return token
    }
    
    const [isAuthorised, setIsAuthorised] = useState(false);
    const [authToken, setAuthToken] = useState("")
    const [loading, setLoading] = useState(true);

    const setAuthentication = (authToken: string) => {
        localStorage.setItem('token', JSON.stringify(authToken));
        setIsAuthorised(true)
        setLoading(false)
    }

    useEffect(() => {
        checkAuthentication()
            .then((data) => setAuthToken(data))
    }, [isAuthorised]);

    const value = { isAuthorised, setAuthentication, authToken };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>

    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider;