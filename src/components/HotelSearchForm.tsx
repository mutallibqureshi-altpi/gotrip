import { useState } from "react";
import DatePicker from "react-datepicker";

function HotelSearchForm() {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [guests, setGuests] = useState("2 Guests, 1 Room"); // Example string

  const handleSearch = (e) => {
    e.preventDefault();
    // --- TODO: Implement hotel search logic ---
    console.log("Searching Hotels:", {
      city,
      checkInDate,
      checkOutDate,
      guests,
    });
    alert(
      `Searching Hotels:\nCity: ${city}\nCheck-in: ${checkInDate?.toLocaleDateString()}\nCheck-out: ${checkOutDate?.toLocaleDateString()}\nGuests: ${guests}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {/* City/Property */}
        <div className="lg:col-span-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City or Property
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g., Mumbai"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Check-in Date */}
        <div className="lg:col-span-1">
          <label
            htmlFor="checkInDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Check-in
          </label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="w-full"
            id="checkInDate"
            required
          />
        </div>

        {/* Check-out Date */}
        <div className="lg:col-span-1">
          <label
            htmlFor="checkOutDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Check-out
          </label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate || new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="w-full"
            id="checkOutDate"
            required
          />
        </div>

        {/* Rooms & Guests (Example - use a dropdown/modal later) */}
        <div className="lg:col-span-1">
          <label
            htmlFor="guests"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Rooms & Guests
          </label>
          <input
            type="text"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="e.g., 2 Guests, 1 Room"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Search Button (Spans remaining columns or place separately) */}
        <div className="lg:col-span-4 mt-4">
          {" "}
          {/* Adjust span or layout */}
          <button
            type="submit"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition duration-200"
          >
            Search Hotels
          </button>
        </div>
      </div>
    </form>
  );
}

export default HotelSearchForm;
