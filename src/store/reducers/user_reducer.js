import * as ACTION_TYPE from '../actions/actions_type'

const initialState = {
    user_text: ''
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE.USER_INPUT:
        return {
            ...state,
            user_text: action.payload
        }
        default:
        return state
    }
}

export default UserReducer