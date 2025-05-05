import React from "react";
import PlainText from "../atoms/PlainText";
import H1 from "../atoms/H1";
const HeroSectionMainText = ({h1Text, pText}) => {
    return (
        <section>
            <H1 h1Text={h1Text}/>
            <PlainText pText={pText}/>
        </section>
    )
}
export default HeroSectionMainText;