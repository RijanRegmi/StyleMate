import React from 'react';
import '../style/About.css';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <Header />

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-intro">
          Welcome to <strong>StyleMate AI</strong>, your smart styling companion. We help you find the
          perfect haircut and beard style that matches your face shape — all through a simple photo upload
          or live camera scan. <br /><br />
          Whether you’re unsure about what look suits you best or want to explore new styles, we make it easy
          with technology that analyzes your facial features and recommends personalized grooming styles.
        </p>

        <div className="about-boxes">
          <div className="box">
            <h2 className="box-title">Why we started</h2>
            <p className="box-content">
              Choosing the right style can be overwhelming, and many people struggle to find what truly fits them.
              We created this platform to bridge the gap between style and smart tech — offering everyone a chance
              to look and feel their best, effortlessly.
            </p>
          </div>

          <div className="box">
            <h2 className="box-title">What Makes Us Different</h2>
            <ul className="box-content">
              <li>AI-powered face shape detection</li>
              <li>Photo and camera-based recommendations</li>
              <li>Style suggestions tailored just for you</li>
            </ul>
          </div>
        </div>

        <p className="about-footer">
          At <strong>StyleMate AI</strong>, we believe that grooming should be smart, easy, and personal.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;

