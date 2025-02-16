import React, { createContext, useContext, useReducer, useState } from "react";
import { clientAPI } from "../api/api";
import { User, SignUpFormData, LogInFormData, UpdateData} from "../types/types"
import { useAuthContext } from "./AuthContext";
// import userReducer from "../reducers/userReducer";

type UserContextType = {
    user: User,
    signUp: (signUpFormData: SignUpFormData) => Promise<string>,
    login: (logInData: LogInFormData) => Promise<string>,
    getUserProfile: (authToken: string) => Promise<User>,
    logout: (authToken: string) => Promise<void>
    logoutAll: (authToken: string) => Promise<void>,
    updateAvatar: (authToken: string, formData: FormData) => Promise<void>,
    updateProfile: (authToken: string, updateData: UpdateData) => Promise<void>
}

interface ProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null);

// const initialState = {} as User

const UserProvider: React.FC<ProviderProps> = ({ children }) => {   
    // const [state, dispatch] = useReducer(userReducer, initialState);
    const [user, setUser] = useState({} as User)

    const value = { 
        user: user,
        signUp : async (signUpFormData: SignUpFormData) => {
            try {
                await clientAPI.post("/users", signUpFormData)
                return "New User Created Successfully"
            } catch (e: any) {
                if (e.response.data.code === 11000) {
                    throw ("User with this email already exists.")
                } else {
                    throw ("Could not create account. Please try again")
                }
            }
        },
        login: async (logInData: LogInFormData) => {
            try {
                const response = await clientAPI.post('/users/login', logInData)
                setUser(response.data.user)
                return response.data.token
            } catch(e){
                throw("Invalid Credentials. Could not log in.")
            }
        },
        getUserProfile: async (authToken: string) => {
            try {
                const response = await clientAPI.get('/users/me', {headers: {"Authorization": `Bearer ${authToken}`}})
                console.log(response.data)
                return response.data
            } catch(e) {
                throw ("Could not get user profile")
            }
        },
        logout: async(authToken: string) => {
            try {
                clientAPI.post('/users/logout', null, {headers: {"Authorization": `Bearer ${authToken}`}})
            } catch(e) {
                throw('Could not log out.')
            }
        }, 
        logoutAll: async(authToken: string) => {
            try {
                await clientAPI.post('/users/logoutAll', null, {headers: {"Authorization": `Bearer ${authToken}`}})
            } catch(e) {
                throw('Could not log out.')
            }
        },
        updateAvatar: async(authToken: string, formData: FormData) => {
            try {
                await clientAPI.post('/users/me/avatar', formData, {headers: {"Authorization": `Bearer ${authToken}`}})
            } catch(e) {
                throw('Could not upload your avatar.')
            }
        },
        updateProfile: async(authToken: string, updateData: UpdateData) => {
            console.log(authToken, updateData)
            try {
                await clientAPI.patch('/users/me', updateData, {headers: {"Authorization": `Bearer ${authToken}`}})
                console.log("profile updated")
            } catch(e) {
                throw('Could not update your profile.')
            }
        }
     };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>

    )
}

export const useUserContext = () => useContext(UserContext)

export default UserProvider;