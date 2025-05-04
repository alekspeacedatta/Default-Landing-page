import React from "react";
import FooterLink from "./atoms/FooterLink";
import FooterHeading from "./atoms/FooterHeading";

const FooterLinkList = ({title, links}) => {
    <div>
        <FooterHeading title={title}/>
        <ul>
            {links.map((link, index) => (
                <FooterLink key={index} href={link.href} label={link.label}/>
            ))}
        </ul>
    </div>
}
export default FooterLinkList;
