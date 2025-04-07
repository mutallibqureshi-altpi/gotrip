import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you'll use react-router-dom
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaApple } from "react-icons/fa"; // Apple Icon

// Placeholder image URL - Use the same as LoginPage for consistency or change as needed
const sideImageUrl =
  "https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Example Monstera plant

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the terms and policy.");
      return;
    }
    // --- TODO: Implement Signup Logic ---
    console.log("Creating account with:", {
      name,
      email,
      password,
      agreedToTerms,
    });
    alert(
      `Signup attempt:\nName: ${name}\nEmail: ${email}\nAgreed: ${agreedToTerms}`
    );
  };

  const handleGoogleSignUp = () => {
    // --- TODO: Implement Google Sign-Up Logic ---
    console.log("Attempting Google Sign-Up...");
    alert("Google Sign-Up (Not Implemented)");
  };

  const handleAppleSignUp = () => {
    // --- TODO: Implement Apple Sign-Up Logic ---
    console.log("Attempting Apple Sign-Up...");
    alert("Apple Sign-Up (Not Implemented)");
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
          {/* No top-left text like login page */}

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {" "}
            {/* Added more margin bottom */}
            Get Started Now
          </h2>
          {/* No subtitle in this design */}

          <form className="space-y-5" onSubmit={handleSignup}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="signup-email-address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="signup-email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="signup-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Note: Confirm password field is not in the image, omitted for simplicity */}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                id="terms-policy"
                name="terms-policy"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded accent-green-600"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required // Make agreeing required
              />
              <label
                htmlFor="terms-policy"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  terms & policy
                </a>{" "}
                {/* Added link */}
              </label>
            </div>

            {/* Signup Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
              >
                Signup {/* Updated text */}
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-sm text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="flex-1 inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                <FcGoogle className="h-5 w-5 mr-2" aria-hidden="true" />
                Sign in with Google{" "}
                {/* Text usually stays "Sign in" for social */}
              </button>
              {/* Apple */}
              <button
                type="button"
                onClick={handleAppleSignUp}
                className="flex-1 inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                <FaApple
                  className="h-5 w-5 mr-2 text-black"
                  aria-hidden="true"
                />
                Sign in with Apple{" "}
                {/* Text usually stays "Sign in" for social */}
              </button>
            </div>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Image Column */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${sideImageUrl})` }}
        >
          {/* Background image */}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
