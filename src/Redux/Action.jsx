import {LOADING,ERROR,GET_USERS} from "./ActionType"

export const Loading = () => {
    return {
        type:LOADING
    }
};

export const Error = () => {
    return {
        type: ERROR
    }
};

export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
};

export const fetchUser = (query, page) => async (dispatch) => {
    try {
        dispatch(Loading());
        let res = await fetch(
            `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
        );
        let data = await res.json();
        dispatch(getUsers(data.items));
    } catch (error) {
        dispatch(Error());
    }
};