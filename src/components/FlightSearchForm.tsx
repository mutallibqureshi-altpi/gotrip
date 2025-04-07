import { useState } from "react";
import DatePicker from "react-datepicker";

function FlightSearchForm() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date()); // Default to today
  const [returnDate, setReturnDate] = useState(null); // Optional
  const [isOneWay, setIsOneWay] = useState(false); // Example radio

  const handleSearch = (e) => {
    e.preventDefault();
    // --- TODO: Implement search logic ---
    console.log("Searching Flights:", {
      fromCity,
      toCity,
      departureDate,
      returnDate,
      isOneWay,
    });
    alert(
      `Searching Flights:\nFrom: ${fromCity}\nTo: ${toCity}\nDepart: ${departureDate?.toLocaleDateString()}\nReturn: ${
        returnDate?.toLocaleDateString() || "N/A"
      }`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Trip Type Radio (Example) */}
      <div className="flex gap-4 mb-4 text-sm">
        <label className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            checked={!isOneWay}
            onChange={() => setIsOneWay(false)}
            className="accent-blue-500"
          />{" "}
          Round Trip
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            checked={isOneWay}
            onChange={() => setIsOneWay(true)}
            className="accent-blue-500"
          />{" "}
          One Way
        </label>
      </div>

      {/* Main Inputs Grid/Flex */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* From */}
        <div className="lg:col-span-1">
          <label
            htmlFor="fromCity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            From
          </label>
          <input
            type="text"
            id="fromCity"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            placeholder="Enter city or airport"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* To */}
        <div className="lg:col-span-1">
          <label
            htmlFor="toCity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            To
          </label>
          <input
            type="text"
            id="toCity"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            placeholder="Enter city or airport"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Departure Date */}
        <div className="lg:col-span-1">
          <label
            htmlFor="departureDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Departure
          </label>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            selectsStart
            startDate={departureDate}
            endDate={returnDate}
            minDate={new Date()} // Don't allow past dates
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="w-full" // Tailwind class applied via inputClassName prop or global CSS
            id="departureDate"
            required
          />
        </div>

        {/* Return Date */}
        <div
          className={`lg:col-span-1 ${
            isOneWay ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <label
            htmlFor="returnDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Return
          </label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            selectsEnd
            startDate={departureDate}
            endDate={returnDate}
            minDate={departureDate || new Date()} // Return date must be after departure
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="w-full"
            id="returnDate"
            disabled={isOneWay}
            required={!isOneWay} // Required only for round trip
          />
          {isOneWay && (
            <div
              className="absolute inset-0"
              title="One way trip selected"
            ></div>
          )}{" "}
          {/* Overlay to visually disable */}
        </div>

        {/* Travellers/Class (Example - refine as needed) */}
        {/* <div className="lg:col-span-1">
          <label htmlFor="travellers" className="block text-sm font-medium text-gray-700 mb-1">Travellers & Class</label>
          <input
            type="text"
            id="travellers"
            placeholder="1 Adult, Economy"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div> */}

        {/* Search Button */}
        <div className="lg:col-span-1">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 h-[42px]" // Match input height
          >
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
}

export default FlightSearchForm;
