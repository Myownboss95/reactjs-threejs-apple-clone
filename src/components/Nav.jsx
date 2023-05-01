import React from "react";
import Logo from "../assets/images/logo.svg"
function Nav() {
    return ( <nav className="nav-wrapper">
        <div className="nav-content">
            <ul className="list-styled">
                <li>
                     <img src={Logo} alt=""/>
                </li>
                <li className="link-styled">
                    Home
                </li>
            </ul>

        </div>
    </nav> );
}

export default Nav;