import InputField from "./InputField";
import { useState, useEffect } from "react";
import "./AuthForm.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberEmail, setRememberEmail] = useState(false);
  const navigation = useNavigate();
  const isLogin = type === "login";

  //For "Remember Email"
  useEffect(() => {
    if (isLogin) {
      let storedEmail = localStorage.getItem("tackleSwapSavedEmail") || "";
      if (storedEmail != "") {
        setEmail(storedEmail);
        setRememberEmail(true);
      }
    }
  }, []);

  //Handles log in / register
  const handleLoginOrSignUpAttempt = async (e) => {
    e.preventDefault();

    //Sign up or login
    if (!isLogin) {
      //Password length check
      if (password.length < 6) {
        setErrorMsg("Password must be at least 6 characters!");
        return;
      }
      //Verifys password and creates new user if succesful
      if (password === verifyPassword) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          //Redirect user to home page
          navigation("/");
        } catch (error) {
          setErrorMsg("Registration error: " + error);
        }
      } else {
        setErrorMsg("Passwords do not match!");
      }
    } else {
      try {
        //Attempt to sign in user
        const user = await signInWithEmailAndPassword(auth, email, password);
        //Save users email
        if (rememberEmail) {
          localStorage.setItem("tackleSwapSavedEmail", email);
        } else {
          localStorage.removeItem("tackleSwapSavedEmail");
        }
        //Redirect user to home page
        navigation("/");
      } catch (error) {
        let msg = error.message;

        if (msg.includes("invalid-credential")) {
          msg = "Incorrect Email or Password!";
        } else if (msg.includes("missing-password")) {
          msg = "Oops, looks like your missing your password!";
        } else if (msg.includes("invalid-email")) {
          msg = "Your email is invalid!";
        }else if (msg.includes("email-already-in-use")) {
          msg = "Email already exists!";
        }

        setErrorMsg(msg);
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-form-title">{isLogin ? "Welcome back, Login!" : "Create Account"}</h2>

      <form className="auth-form-form">
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isLogin && (
          <div className="remember-password-container">
            <input
              checked={rememberEmail}
              type="checkbox"
              onChange={(e) => setRememberEmail(e.target.checked)}
            />
            <span className="auth-form-remember-email"> Remember Email</span>
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

        <button className="auth-form-submit-btn" onClick={handleLoginOrSignUpAttempt} type="submit">
          {isLogin ? "Login" : "Create Account"}
        </button>

        <h6 className="error-message">{errorMsg}</h6>

        <h5 className="auth-form-signup-login-toggle">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account with us?"}
          <NavLink to={isLogin ? "/signup" : "/login"}>
            {isLogin ? " Sign Up!" : " Login!"}
          </NavLink>
        </h5>
      </form>
    </div>
  );
}

export default AuthForm;
