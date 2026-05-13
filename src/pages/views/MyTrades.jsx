import { useAuth } from "../../hooks/useAuth";
import "./MyTrades.css";

export default function MyTrades() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="my-trades-main-container">
        <h5 className="misc-text">Loading...</h5>
      </div>
    );
  }

  return (
    <div className="my-trades-main-container">
      {/* Logged out */}
      {!user && <h5 className="misc-text">Please login to see trades</h5>}

      {user && <h1>My Trades</h1>}
    </div>
  );
}
