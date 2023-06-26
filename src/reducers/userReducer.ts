import { UserAction, User, Actions } from "../types/types"

const userReducer: React.Reducer<User, UserAction> = (state, action) => {
    const {type, payload} = action

    switch(type){
        // case Actions.LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }

        // case Actions.FAILURE: 
        //     return {
        //         ...state,
        //         error: payload?.error,
        //         loading: false
        //     }
        
        case Actions.ADD: 
            return  payload ? payload : {} as User

        default: 
            return state
    }
}

export default userReducer
