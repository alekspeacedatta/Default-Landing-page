import React from "react";

const FooterLink = ({href, label}) => {
    return (
        <li>
            <a href={href}>{label}</a>
        </li>
    )
}

export default FooterLink;
