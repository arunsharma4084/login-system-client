export type User = {
    _id: string,
    username: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
    avatar?: string | null,
    __v: number
}

export type SignUpFormData = {
    username: string,
    email: string,
    password: string
}

export type LogInFormData = {
    email: string,
    password: string
}

export enum Actions {
    ADD = "ADD_USER",
    LOGIN = "LOGIN_USER",
    UPDATE = "UPDATE_USER",
    DELETE = "DELETE_USER",
    ADD_AVATAR = "ADD_AVATAR",
    DELETE_AVATAR = "DELETE_AVATAR",
    LOGOUT = "LOGOUT_USER",
    LOGOUT_ALL = "LOGOUT_ALL_USERS",
    // LOADING = "LOADING", 
    // FAILURE = "FAILURE"
}

export type UserAction = {
    type: Actions,
    payload?: User
}

export type UserState = {
    user: User | undefined
    error: string | undefined
    loading: boolean
}

export type authProps = {
    user: User | undefined,
    authToken: string | undefined
}