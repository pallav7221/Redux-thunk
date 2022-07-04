import { GET_USERS, ERROR, LOADING } from "./ActionType";

const initState = {
    users: [],
    loading: false,
    error: false
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOADING: {
            return {
                ...state,
                users: [],
                loading: true,
                error: false
            };
        }
        case GET_USERS: 
            return {
                ...state,
                users: payload,
                loading: false,
                error: false
            };
        case ERROR: 
            return {
                ...state,
                users: [],
                loading: false,
                error: true
            };

        default: return state

    }
};

export {reducer};