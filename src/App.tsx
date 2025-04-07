import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Import HomePage
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import SignupPage from "./pages/SignupPage"; // Import SignupPage
import { Link } from "react-router-dom";
// Import other page components if you have them (e.g., ForgotPasswordPage)

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Add other routes here, e.g.: */}
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
          {/* <Route path="/offers" element={<OffersPage />} /> */}
          {/* Add a 404 Not Found route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* You could add a global Footer component here if needed */}
    </div>
  );
}

// Simple NotFoundPage component (can be in its own file)
function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
        Go back home
      </Link>
    </div>
  );
}

export default App;
