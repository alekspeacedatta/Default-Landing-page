import React from "react";

const NavLinks = ({href, label}) => {
    return (
        <li>
            <a href={href}>{label}</a>
        </li>
    )
}
export default NavLinks;