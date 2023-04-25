import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/pages.css";

function About() {
    

    return (
        <>
        <Navbar />
        <div className="about">
            <h2>Introduction</h2>
            <p>
                Hi, I'm Dev! I'm a Bachelor's student in Management Studies with a passion for technology and entrepreneurship.
            </p>
            <h2>Technical Skills</h2>
            <p>
                I have been developing websites from scratch for the past two years and specialize in creating APIs using Django, React JS, and the MERN Stack.
            </p>
            <h2>Entrepreneurial Experience</h2>
            <p>
                I am currently working on a startup of my own - a Korean food truck in the streets of Navi Mumbai's Kharghar area, which has taught me valuable lessons in entrepreneurship.
            </p>
            <h2>Approach</h2>
            <p>
                My unique background and skillset in both business and technical fields allow me to approach projects and challenges from a creative and effective perspective. With a deep understanding of how technology can be used to drive business strategy, I am eager to create unique solutions that meet my clients' needs.
            </p>
            <h2>Constant Learning</h2>
            <p>
                I am constantly learning and improving my skills, staying up-to-date with the latest trends and developments in the tech industry. I am excited to use my expertise to make a positive impact in the world and contribute to the growth of my community.
            </p>
        </div>
        <Footer />
        </>
    );
}

export default About;
