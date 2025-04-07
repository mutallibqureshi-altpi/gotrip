import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you'll use react-router-dom
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaApple } from "react-icons/fa"; // Apple Icon

// Placeholder image URL - Replace with your actual image
const sideImageUrl =
  "https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Example Monstera plant

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // --- TODO: Implement Login Logic ---
    console.log("Logging in with:", { email, password, rememberMe });
    alert(`Login attempt:\nEmail: ${email}\nRemember: ${rememberMe}`);
  };

  const handleGoogleSignIn = () => {
    // --- TODO: Implement Google Sign-In Logic ---
    console.log("Attempting Google Sign-In...");
    alert("Google Sign-In (Not Implemented)");
  };

  const handleAppleSignIn = () => {
    // --- TODO: Implement Apple Sign-In Logic ---
    console.log("Attempting Apple Sign-In...");
    alert("Apple Sign-In (Not Implemented)");
  };

  return (
    // Main container takes full height below navbar and centers the card
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)] bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Adjust min-height based on your actual Navbar height */}
      {/* Card Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Form Column */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Enter your Credentials to access your account
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" // Adjusted padding
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" // Adjusted padding
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded accent-green-600" // Accent color change
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember for 30 days {/* Updated label */}
              </label>
            </div>

            {/* Login Button */}
            <div>
              <Link to="/home">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out" // Green button
                >
                  Login
                </button>
              </Link>
            </div>

            {/* Divider */}
            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-sm text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex-1 inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                <FcGoogle className="h-5 w-5 mr-2" aria-hidden="true" />
                Sign in with Google
              </button>
              {/* Apple */}
              <button
                type="button"
                onClick={handleAppleSignIn}
                className="flex-1 inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                <FaApple
                  className="h-5 w-5 mr-2 text-black"
                  aria-hidden="true"
                />{" "}
                {/* Added text-black for visibility */}
                Sign in with Apple
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Image Column */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${sideImageUrl})` }}
        >
          {/* Background image is set via inline style */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
