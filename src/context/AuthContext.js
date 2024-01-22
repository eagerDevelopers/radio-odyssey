import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { userToken: action.payload };
        case "LOGOUT":
            return { userToken: null };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        userToken: null,
    });

    useEffect(() => {
        const userToken = JSON.parse(localStorage.getItem("userToken"));

        if (userToken) {
            dispatch({type: "LOGIN", payload: {token: userToken.token, username: userToken.username}});
        }
    }, []);

    console.log("Auth context state: ", state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    );
}