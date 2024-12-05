import React,{ useState } from "react";
import { useNavigate} from "react-router-dom";

const Login=()=> {
  const [user, setUser] = useState({
    email: "", // Start with an empty email attribute
  });
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get input name and value
    setUser((prevUser) => ({
      ...prevUser, // Keep previous user data
      [name]: value, // Dynamically update the changed attribute
    }));
  };

  const handleGetOtp = () => {
    if (user.email.trim() === "") {
      alert("Please enter your email address."); // Show alert if email is empty
    } else {
      navigate("/Otp"); // Navigate to OTP page if email is entered
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="w-full bg-white shadow-md py-4 px-6">
        <img
          src="https://imgs.search.brave.com/4YY4lC-SDEwKWf3dwogOYtE4WVeJnm58yGvSohFsnK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby1uZXcv/Z3JvY2VyeS1zdG9y/ZS1kb29yLW1lcmdl/ZC13aXRoLWF3bmlu/Zy1vZi1mb29kLWl0/ZW1zLTkwNTlsZC5w/bmc_bndtPTEmbndz/PTEmaW5kdXN0cnk9/Zm9vZCZ0eHRfa2V5/d29yZD1BbGw"
          alt="Campus Food Logo"
          className="mx-auto max-w-xs sm:max-w-sm"
        />
      </div>

      <div className="px-4 sm:px-8 lg:px-16 py-8">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          CU's First-Ever Food Ordering System
        </h1>

        <div className="relative flex items-center justify-center mb-6">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="absolute bg-gray-100 px-4 text-gray-500">
            Log in or Sign up
          </span>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Input Field */}
          <input
            type="email"
            name="email" // Specify input name for dynamic updating
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-lg p-4 text-base mb-4 focus:ring focus:ring-red-300"
            value={user.email} // Bind input value to the state
            onChange={handleInputChange}
            required // Call function on every change
          />
          <div>
            
              <button className="w-full bg-red-500 text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition duration-200 mb-6" onClick={handleGetOtp}>
                Get OTP
              </button>
            
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="absolute bg-gray-100 px-4 text-gray-500">or</span>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-4 hover:bg-gray-50 transition duration-200">
              <img
                src="https://imgs.search.brave.com/5nUR1GQfO6oW2ZblD7hjaiWoloSjLmvkuCl8g_hkgbY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2lkZW50aXR5L2lt/YWdlcy9icmFuZGlu/Z19ndWlkZWxpbmVf/c2FtcGxlX250X3Jk/X3NsLnN2Zw"
                alt="Google"
                className="w-8 h-8 mr-3"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">
          © 2024 Campus Food. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;
