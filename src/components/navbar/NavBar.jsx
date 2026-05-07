import "./Navbar.css";
import logoImg from "../../assets/navbar/logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

export default function NavBar() {
  const { user, loading } = useAuth();
  const navigation = useNavigate();

  if (loading) {
    return (
      <div className="navbar-container">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <img src={logoImg} alt="TackleSwap logo" />

      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/my-trades" className="nav-link">
          My Trades
        </NavLink>
        <NavLink to="/messages" className="nav-link">
          Messages
        </NavLink>
      </div>

      <div className="nav-right">
        {user ? (
          <button onClick={() => auth.signOut()}>Logout</button>
        ) : (
          <button onClick={() => navigation("/login")}>Login / Sign Up</button>
        )}
      </div>
    </div>
  );
}
