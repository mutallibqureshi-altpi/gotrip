import { useState } from "react";
import DatePicker from "react-datepicker";

function BusSearchForm() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState(new Date());

  const handleSearch = (e) => {
    e.preventDefault();
    // --- TODO: Implement bus search logic ---
    console.log("Searching Buses:", { fromCity, toCity, travelDate });
    alert(
      `Searching Buses:\nFrom: ${fromCity}\nTo: ${toCity}\nDate: ${travelDate?.toLocaleDateString()}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
        {/* From City */}
        <div className="lg:col-span-1">
          <label
            htmlFor="fromBusCity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            From City
          </label>
          <input
            type="text"
            id="fromBusCity"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            placeholder="e.g., Mumbai"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* To City */}
        <div className="lg:col-span-1">
          <label
            htmlFor="toBusCity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            To City
          </label>
          <input
            type="text"
            id="toBusCity"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            placeholder="e.g., Pune"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Travel Date */}
        <div className="lg:col-span-1">
          <label
            htmlFor="travelDateBus"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Travel Date
          </label>
          <DatePicker
            selected={travelDate}
            onChange={(date) => setTravelDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="w-full"
            id="travelDateBus"
            required
          />
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 h-[42px]"
          >
            Search Buses
          </button>
        </div>
      </div>
    </form>
  );
}

export default BusSearchForm;
