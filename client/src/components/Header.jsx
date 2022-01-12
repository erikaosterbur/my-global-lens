import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Header () {
    // const { logout, isAuthenticated } = useAuth0();
    const { loginWithRedirect} = useAuth0();




    return (
        <div>
            <button onClick={() => loginWithRedirect()}>Login</button>






        </div>
    )
}


export default Header; 