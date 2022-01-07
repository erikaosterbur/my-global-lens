import React from "react";
import { auth0, useAuth0 } from "@auth0/auth0-react";

function Login () {

    const { loginWithRedirect, isAuthenticated } = useAuth0();



    return (
        !isAuthenticated && (

            <div>



            </div>

        )
        
    )
}


export default Login; 