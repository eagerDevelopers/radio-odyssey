import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { setMaxListeners } from "events";
import { useNavigate } from "react-router";

export const useLogin = () => {
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const login = async (loginData) => {
        try{
            const response = await fetch("//localhost:5001/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password,
                }),
            });
            const valueJSON = await response.json();

            console.log(`Response from server: ${valueJSON.userAuthenticated}`);
            if(valueJSON.userAuthenticated){
                console.log("1 user is authenticated");
                
                localStorage.setItem("userToken", JSON.stringify({token: valueJSON.token, username: valueJSON.username}));
                dispatch({type: "LOGIN", payload: {token: valueJSON.token, username: valueJSON.username}});

                navigate('/map');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {login};
}