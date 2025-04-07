import Hero from "../components/Hero"; // Adjust path if needed

function HomePage() {
  return (
    <>
      <Hero />
      {/* Add other sections like Offers, Destinations, Footer etc. below */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Future Content Area (Offers, etc.)
        </h2>
        {/* Placeholder for other content */}
      </div>
      {/* You might add a Footer component here as well */}
    </>
  );
}

export default HomePage;
