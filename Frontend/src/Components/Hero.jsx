import './../Style/Hero.css';


import icons1 from "../assets/icons1.png";
import icons2 from "../assets/icons2.png";
import icons3 from "../assets/icon3.png";

import { useLocation, useNavigate } from 'react-router-dom';

function Hero(){
    const navigate = useNavigate();
        const location = useLocation();
    
        const isActive = (path) => location.pathname === path;
    return(
        <>
            <section className = "hero">
<h2 className="subheading">Style Mate</h2>
<h1 className="headline">
  Your Hair, Your Identity
</h1>
<p className="description">
  Smart style picks. <br />
  Tailored to your hair. <br />
  Designed to stand out.
</p>

      <div className="icons">
        <img src={icons1} alt="Hairstyle 1" />
        <img src={icons2} alt="Hairstyle 2" />
        <img src={icons3} alt="Hairstyle 3" />
      </div>
     
      <a href="#" className="cta-button">
        Explore Styles
      </a>
                
            </section>
        </>
    );
}

export default Hero