import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { setMaxListeners } from "events";
import { useNavigate } from "react-router";

export const useSignup = () => {
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const signup = async (signupData) => {
        try {
            const response = await fetch("//localhost:5001/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: signupData.username,
                    password: signupData.password,
                    firstName: signupData.firstName,
                    lastName: signupData.lastName,
                    email: signupData.email,
                }),
            });
            const valueJSON = await response.json();
            
            console.log(`Response from server: ${valueJSON.userAuthenticated}`);
            if(!valueJSON.userAuthenticated) {
                return;
            }

            localStorage.setItem("userToken", JSON.stringify({token: valueJSON.token, username: valueJSON.username}));

            dispatch({type: "LOGIN", payload: {token: valueJSON.token, username: valueJSON.username}});

            navigate('/map');
        } catch (error) {
            console.error(error);
        }
    }

    return {signup};
}