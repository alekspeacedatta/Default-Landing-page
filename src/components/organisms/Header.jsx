import React from "react";
import LoginContainer from "../molecules/LoginContainer";
import NavList from "../molecules/NavList";
import Logo from "../atoms/Logo";
const Header = ({logo, navLinks}) => {
    return (
        <header>
            <div className="header-content">
                <Logo logo={logo}/>
                <nav>
                    <NavList links={navLinks}/>
                </nav>
                <LoginContainer/>
            </div>
        </header>
    )
}

export default Header;
