import { Link } from "react-router-dom";
import logo from "../assets/lawlens_logo.png";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";

const NavigationHeader = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);

  const handleToggleMenu = () => {
    if (burgerMenuOpen) {
      setAnimateClose(true);
      setTimeout(() => {
        setBurgerMenuOpen(false);
        setAnimateClose(false);
      }, 800)
    } else {
      setBurgerMenuOpen(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = burgerMenuOpen ? 'hidden' : 'auto';
  }, [burgerMenuOpen])

  

  return (
    <header>
      {/* Desktop & Tablet Header */}
      <div className="general_head">
        <div className="head_cont flex items-center justify-around">
          
          <div className="nav_head">
            <Link to="/about" className="nav_btns">About</Link>
            <Link to="/experience" className="nav_btns">Experience</Link>
          </div>

          <img src={logo} alt="logo" className="logo_head" />
          
          <div className="nav_head">
            <Link to="/portfolio" className="nav_btns">Portfolio</Link>
            <Link to="/contact" className="nav_btns">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile_head">
        <img src={logo} alt="logo" className="logo_head_mob" />
        <button className="burger_head" onClick={handleToggleMenu}>☰</button>
      </div>

      {(burgerMenuOpen || animateClose) && (
        <MobileHeader onClose={handleToggleMenu} isClosing={animateClose}/>
      )}
f    </header>
  );
};

export default NavigationHeader;
