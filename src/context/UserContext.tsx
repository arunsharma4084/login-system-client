import React, { createContext, useContext, useReducer } from "react";
import { clientAPI } from "../api/api";
import { User, UserState, UserAction, SignUpFormData, Actions} from "../types/types"
import userReducer from "../reducers/userReducer";

type UserContextType = {
    user: UserState,
    signUp: (signUpFormData: SignUpFormData) => void
}

interface ProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null);


const initialState = {
    user: {},
    error: "",
    loading: false
} as UserState

const UserProvider: React.FC<ProviderProps> = ({ children }) => {   
    const [state, dispatch] = useReducer(userReducer, initialState);

    const value = { 
        user: state,
        signUp : async (signUpFormData: SignUpFormData) => {
            dispatch({type: Actions.LOADING})
            try {
                const response = await clientAPI.post("/users", signUpFormData)
                dispatch({type: Actions.ADD, payload: {user: response.data.user}})
            } catch (e: any) {
                if (e.response.data.code === 11000) {
                    dispatch({type: Actions.FAILURE, payload: {error: "User with this email already exists."}});
                } else {
                    dispatch({type: Actions.FAILURE, payload: {error: "Could not create account. Please try again"}});
                }
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