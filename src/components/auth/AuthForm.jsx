import InputField from "./InputField";
import { useState } from "react";
import "./AuthForm.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

//To do
//  1) register
//  2) login
//  3) remember pw
//  4) login w google?
//  5) home page w logout

function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigate();
  const isLogin = type === "login";

  //Handles log in / sign out
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
        //Redirect user to home page
        navigation("/");
      } catch (error) {
        setErrorMsg("There was a problem loggin you in! " + error);
      }
    }
  };

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

        <button onClick={handleLoginOrSignUpAttempt} type="submit">
          {isLogin ? "Login" : "Create Account"}
        </button>

        <h6>{errorMsg}</h6>
      </form>
    </div>
  );
}

export default AuthForm;
