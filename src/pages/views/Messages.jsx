import { useAuth } from "../../hooks/useAuth";
import "./Messages.css";

export default function Messages() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="messages-main-container">
        <h5 className="misc-text">Loading...</h5>
      </div>
    );
  }

  return (
    <div className="messages-main-container">
      {/* Logged out */}
      {!user && <h5 className="misc-text">Please login to see messages</h5>}

      {user && <h1>Messages</h1>}
    </div>
  );
}
