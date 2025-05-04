import React from "react";
import NavLinks from "../atoms/NavLinks";

const NavList = ({ links }) => {
    return (
        <ul>
            {links.map((link, index) => (
                <NavLinks key={index} href={link.href} label={link.label}/>
            ))}
        </ul>
    )
}
export default NavList;
