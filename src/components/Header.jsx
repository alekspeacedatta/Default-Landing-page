import React from "react";
import Button from "./atoms/Button";
const Header = ({logo, navLinks}) => {
    return (
        <header>
            <div className="header-content">
                <h3>{logo}</h3>
                <nav>
                    <ul>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="buttons">
                        <Button buttonText="log in"/>
                        <Button buttonText="sign up"/>
                </div>
            </div>
        </header>
    )
}

export default Header;