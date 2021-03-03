import React from "react";
import {
    BrowserRouter as Router,
    
    Link,
    
} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-item nav-link active" to={'/'}>
                    Home 
                </Link>
                <Link class="nav-item nav-link" to={'/productDeteil'}>
                    Details Page
                </Link>
                
                
            </div>
        </div>
        </>
    );
};

export default Navbar;
