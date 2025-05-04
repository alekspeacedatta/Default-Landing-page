import React from "react";
import FooterLinkList from "../molecules/FooterLinkList"
const Footer=({footerLinks}) => {
    return (
        <footer>
            <div className="footer-content">
               {footerLinks.map((group, index) => (
                <FooterLinkList key={index} title={group.title} links={group.links}/>
               ))}
            </div>
        </footer>
    );
}

export default Footer;