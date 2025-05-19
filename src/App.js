import React from "react";
import Header from "./components/organisms/Header";
import Footer from './components/organisms/Footer'
import HeroSection from "./components/organisms/HeroSection";
import "./App.css"
function App() {
    const navLinks = [
        { label: "Home", href: "#home"},
        { label: "About us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Products", href: "#products" },
        { label: "Contact", href: "#Contact" },
    ];
    const footerLinks = [
        {
            title: "Company",
            links: [
              { label: "Home", href: "#home"},
              { label: "About us", href: "#about" },
              { label: "Careers", href: "#careers" },
              { label: "Products", href: "#products" },
              { label: "Contact", href: "#contact" },
            ]
        },
        {
            title: "FooterLinks",
            links: [
              { label: "Home", href: "#home"},
              { label: "About us", href: "#about" },
              { label: "Careers", href: "#careers" },
              { label: "Products", href: "#products" },
              { label: "Contact", href: "#contact" },
            ]
        },
        {
            title: "Company",
            links: [
              { label: "Home", href: "#home"},
              { label: "About us", href: "#about" },
              { label: "Careers", href: "#careers" },
              { label: "Products", href: "#products" },
              { label: "Contact", href: "#contact" },
            ]
        },
        {
            title: "FooterLinks",
            links: [
              { label: "Home", href: "#home"},
              { label: "About us", href: "#about" },
              { label: "Careers", href: "#careers" },
              { label: "Products", href: "#products" },
              { label: "Contact", href: "#contact" },
            ]
        },
    ];
    return (
        <div>
            <Header logo="Logo" navLinks={navLinks}/>,
            <HeroSection h1Text="welcome to vegas the pride is on" pText="goo news is happening right now cause you are in vegas where you can be the who you want about like 9.99$ its ok to bee good good like kikel" buttonText="magic happens with your first move"/>,
            <Footer footerLinks={footerLinks}/>
        </div>
    )
}



export default App;