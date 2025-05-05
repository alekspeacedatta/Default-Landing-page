import React from "react";
import HeroSectionMainText from "./HeroSectionMainText.jsx";
import Button from "../atoms/Button";
const HeroSectionText = ({h1Text, pText, buttonText}) => {
    return (
        <div className="hero-section-text">        
            <HeroSectionMainText h1Text={h1Text} pText={pText}/>
            <Button buttonText={buttonText}/>
        </div>
    )
}
export default HeroSectionText;