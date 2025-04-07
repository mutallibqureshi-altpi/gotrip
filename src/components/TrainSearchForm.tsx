import { useState } from "react";
import DatePicker from "react-datepicker";

function TrainSearchForm() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [travelDate, setTravelDate] = useState(new Date());

  const handleSearch = (e) => {
    e.preventDefault();
    // --- TODO: Implement train search logic ---
    console.log("Searching Trains:", { fromStation, toStation, travelDate });
    alert(
      `Searching Trains:\nFrom: ${fromStation}\nTo: ${toStation}\nDate: ${travelDate?.toLocaleDateString()}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
        {/* From Station */}
        <div className="lg:col-span-1">
          <label
            htmlFor="fromStation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            From Station
          </label>
          <input
            type="text"
            id="fromStation"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
            placeholder="e.g., Mumbai CSMT"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* To Station */}
        <div className="lg:col-span-1">
          <label
            htmlFor="toStation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            To Station
          </label>
          <input
            type="text"
            id="toStation"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
            placeholder="e.g., Pune Jn"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Travel Date */}
        <div className="lg:col-span-1">
          <label
            htmlFor="travelDateTrain"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Travel Date
          </label>
          <DatePicker
            selected={travelDate}
            onChange={(date) => setTravelDate(date)}
            minDate={new Date()} // Can't select past dates
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="w-full" // Applied via global CSS or inputClassName
            id="travelDateTrain"
            required
          />
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 h-[42px]" // Match input height
          >
            Search Trains
          </button>
        </div>
      </div>
      {/* Optional: Add Class dropdown later */}
    </form>
  );
}

export default TrainSearchForm;
