import React from "react";
import HeroSectionText from "../molecules/HeroSectionText";
const HeroSection = ({h1Text, pText, buttonText}) => {
    return (
        <div className="hero-section">
            <div className="hero-section-content">
                <HeroSectionText h1Text={h1Text} pText={pText} buttonText={buttonText}/>
                <div className="hero-section-image">

                </div>
            </div>
        </div>
    );
}
export default HeroSection;