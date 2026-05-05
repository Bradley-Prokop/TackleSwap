import "./Navbar.css";
import logoImg from "../../assets/navbar/logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <div className="navbar-container">
            <img src={logoImg} alt="TackleSwap logo" />
            <div className="nav-links">
                <NavLink to="/" end className="nav-link">Home</NavLink>
                <NavLink to="/my-trades" className="nav-link">My Trades</NavLink>
                <NavLink to="/messages" className="nav-link">Messages</NavLink>
            </div>

            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
        </div>
    );

};