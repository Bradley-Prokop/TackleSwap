import "./Navbar.css";
import logoImg from "../../assets/navbar/logo.png";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useState } from "react";

export default function NavBar() {
  const { user, loading } = useAuth();
  const navigation = useNavigate();
  const useReponsiveNavbar = window.innerWidth <= 830;
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  if (loading) {
    return (
      <div className="navbar-container">
        <p>loading...</p>
      </div>
    );
  }

  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  };

  return (
    <div className="navbar-main-container">
      {/* For Desktop */}
      {!useReponsiveNavbar && (
        <>
          <img className="navbar-img" src={logoImg} alt="TackleSwap logo" />

          <div className="nav-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/browse" className="nav-link">
              Browse
            </NavLink>
            <NavLink to="/listings" className="nav-link">
              Listings
            </NavLink>
            {/* <NavLink to="/" className="nav-link">
              
            </NavLink> */}
          </div>

          <h4 className="navbar-slogan">Gear up. Trade smart. Fish more.</h4>

          <div className="nav-right">
            {user ? (
              <button onClick={() => auth.signOut()}>Logout</button>
            ) : (
              <button onClick={() => navigation("/login")}>
                Login / Sign Up
              </button>
            )}
          </div>
        </>
      )}

      {/* For Mobile (hamburger style) */}
      {useReponsiveNavbar && (
        <div className="navbar-hamburger-container">
          <h4 className="navbar-slogan-hamburger">
            Gear up. Trade smart. Fish more.
          </h4>

          <button
            className="navbar-hamburger-menu-btn"
            onClick={toggleMenuIsOpen}
          >
            <Menu size={32} />
          </button>
        </div>
      )}

      {/* Pop up menu clicked */}
      {menuIsOpen && <div className="navbar-hamburger-popup-menu">

          <h1 className="navbar-hamburger-popup-menu-title">TackleSwap.com</h1>
          <button onClick={toggleMenuIsOpen} className="hamburger-popup-menu-close-btn">
            <X size={32}/>
          </button>

          <div className="hamburger-popup-menu-navlink-container">
            <NavLink onClick={toggleMenuIsOpen}  to="/" className="hamburger-popup-menu-navlinks">Home</NavLink>
            <NavLink onClick={toggleMenuIsOpen}  to="/browse" className="hamburger-popup-menu-navlinks">Browse</NavLink>
            <NavLink onClick={toggleMenuIsOpen}  to="/listings" className="hamburger-popup-menu-navlinks">Listings</NavLink>
          </div>

          <div className="hamburger-popup-menu-auth-btn-container">
            {user ? (
              <button onClick={() => auth.signOut()}>Logout</button>
            ) : (
              <button onClick={() => navigation("/login")}>
                Login / Sign Up
              </button>
            )}
          </div>
          
      </div>}
    </div>
  );
}
