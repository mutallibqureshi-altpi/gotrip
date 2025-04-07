import SearchWidget from "./SearchWidget";

// Replace with your desired background image URL
const backgroundImageUrl =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center pt-16 pb-24 md:pt-24 md:pb-32" // Added padding top/bottom
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Optional Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-md">
          Book Your Next Adventure
        </h1>

        <SearchWidget />
      </div>
    </div>
  );
}

export default Hero;
