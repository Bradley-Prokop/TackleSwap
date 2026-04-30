import InputField from "./InputField";
import { useState } from "react";
import "./AuthForm.css";

function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const isLogin = type === "login";

  return (
    <div className="auth-form-container">
      <h2>{isLogin ? "Welcome back, Login!" : "Create Account"}</h2>

      <form>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isLogin && (
          <div className="remember-password">
            <input type="checkbox" />
            <span> Remeber Email</span>
          </div>
        )}

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <InputField
            type="password"
            placeholder="verify password"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        )}

        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
      </form>
    </div>
  );
}

export default AuthForm;
