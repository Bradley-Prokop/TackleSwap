import "./Footer.css";
import logoImg from "../../assets/navbar/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-content">
        <div className="footer-title-container">
          <h1 className="footer-title">Tackle Swap</h1>
          <img className="footer-img" src={logoImg} alt="Tackle swap logo" />
        </div>

        <div className="footer-link-content">
            <NavLink to="/" className="footer-navlink">Home</NavLink>
            <NavLink to="/my-trades" className="footer-navlink">My trades</NavLink>
            <NavLink to="/messages" className="footer-navlink">Messages</NavLink>
        </div>

        <div className="footer-divider-line"></div>

        <div className="footer-misc-content">
            <NavLink className="footer-navlink footer-misc-links">Privacy Policy</NavLink> 
            <span className="footer-misc-spacer">|</span>
            <NavLink className="footer-navlink footer-misc-links">Terms & Conditions</NavLink>
        </div>

        <h6 className="copy-right">All Rights Reserved &copy; | TackleSwap LLC | EST. 2026</h6>
      </div>
    </div>
  );
}
