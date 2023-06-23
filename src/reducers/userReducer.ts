import { UserAction, UserState, Actions } from "../types/types"

const userReducer: React.Reducer<UserState, UserAction> = (state, action) => {
    const {type, payload} = action

    switch(type){
        case Actions.LOADING:
            return {
                ...state,
                loading: true
            }

        case Actions.FAILURE: 
            return {
                ...state,
                error: payload?.error,
                loading: false
            }
        
        case Actions.ADD: 
            return {
                user: payload?.user,
                error: "",
                loading: false
            }

        default: 
            return state
    }
}

export default userReducer
