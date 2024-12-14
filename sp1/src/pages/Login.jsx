// src/Home/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Signup.css";
import { auth } from "../Firebase/firebaseConfig"; // Import auth from firebaseConfig
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Authenticate user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccess("Login successful! Welcome back.");
      setError("");
    } catch (err) {
      // Handle errors
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email. Please sign up.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address. Please check and try again.");
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    }
  };

  // Handle forgot password
  const handleForgotPassword = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Please check your inbox.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email. Please sign up.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address. Please check and try again.");
      } else {
        setError("Failed to send password reset email. Please try again.");
      }
    }
  };

  return (
    <div className="Login-container">
      <div className="Login-header">
        <img
          src="https://imgs.search.brave.com/4YY4lC-SDEwKWf3dwogOYtE4WVeJnm58yGvSohFsnK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby1uZXcv/Z3JvY2VyeS1zdG9y/ZS1kb29yLW1lcmdl/ZC13aXRoLWF3bmlu/Zy1vZi1mb29kLWl0/ZW1zLTkwNTlsZC5w/bmc_bndtPTEmbndz/PTEmaW5kdXN0cnk9/Zm9vZCZ0eHRfa2V5/d29yZD1BbGw"
          alt="Campus Food Logo"
          className="Logo-img"
        />
      </div>

      <form className="Login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <p>
          <span className="forgot-password-text" onClick={handleForgotPassword}>
            Forgot Password?
          </span>
        </p>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>

      <div className="Login-social">
        <button className="Google-btn">
          <img
            src="https://imgs.search.brave.com/5nUR1GQfO6oW2ZblD7hjaiWoloSjLmvkuCl8g_hkgbY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2lkZW50aXR5L2lt/YWdlcy9icmFuZGlu/Z19ndWlkZWxpbmVf/c2FtcGxlX250X3Jk/X3NsLnN2Zw"
            alt="Google"
            className="Google-img"
          />
          Continue with Google
        </button>
      </div>

      <footer className="Login-footer">
        <p>© 2024 Campus Food. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;