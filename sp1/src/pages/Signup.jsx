import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
// Ensure the CSS import is correct
import '../pages/Signup.css'
import { auth } from '../Firebase/firebaseConfig'; // Import auth from firebaseConfig
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  // Handle email and password signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      setSuccess('Verification email sent. Please check your inbox and verify your email.');

      // Polling for email verification status
      const checkEmailVerified = setInterval(async () => {
        await user.reload();
        if (user.emailVerified) {
          clearInterval(checkEmailVerified);
          setEmailVerified(true);
          setSuccess('Email verified! Signup successful.');
        }
      }, 3000);
    } catch (err) {
      setError(`Signup failed: ${err.message}`);
      console.error(err);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setError('');
    setSuccess('');

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setSuccess(`Welcome, ${user.displayName}! Google Sign-In successful.`);
    } catch (err) {
      setError(`Google Sign-In failed: ${err.message}`);
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img
          src="https://imgs.search.brave.com/4YY4lC-SDEwKWf3dwogOYtE4WVeJnm58yGvSohFsnK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby1uZXcv/Z3JvY2VyeS1zdG9y/ZS1kb29yLW1lcmdl/ZC13aXRoLWF3bmlu/Zy1vZi1mb29kLWl0/ZW1zLTkwNTlsZC5w/bmc_bndtPTEmbndz/PTEmaW5kdXN0cnk9/Zm9vZCZ0eHRfa2V5/d29yZD1BbGw"
          alt="Campus Food Logo"
          className="Logo-img"
        />
      </div>

      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

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

        <button type="submit">Sign Up</button>

        {emailVerified && (
          <p className="success">
            Account verified successfully! You can now <Link to="/login">Log In</Link>.
          </p>
        )}

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>

      <div className="signup-social">
        <button className="Google-btn" onClick={handleGoogleSignIn}>
          <img
            src="https://imgs.search.brave.com/5nUR1GQfO6oW2ZblD7hjaiWoloSjLmvkuCl8g_hkgbY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2lkZW50aXR5L2lt/YWdlcy9icmFuZGlu/Z19ndWlkZWxpbmVf/c2FtcGxlX250X3Jk/X3NsLnN2Zw"
            alt="Google"
            className="Google-img"
          />
          Continue with Google
        </button>
      </div>

      <footer className="signup-footer">
        <p>© 2024 Campus Food. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Signup;