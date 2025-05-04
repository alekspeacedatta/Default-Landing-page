import React from "react";

const HeroSection = ({slogan, sloganSubText, buttonText}) => {
    return (
        <div className="hero-section">
            <div className="hero-section-content">
                <div className="hero-section-text">
                    <section>
                        <h1>
                            {slogan}
                        </h1>
                        <p>
                            {sloganSubText}
                        </p>
                    </section>
                    <button>
                        {buttonText}
                    </button>
                </div>
                <div className="hero-section-image">

                </div>
            </div>
        </div>
    );
}
export default HeroSection;