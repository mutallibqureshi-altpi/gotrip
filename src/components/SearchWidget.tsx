import FlightSearchForm from "./FlightSearchForm";
import HotelSearchForm from "./HotelSearchForm";
import TrainSearchForm from "./TrainSearchForm";
import BusSearchForm from "./BusSearchForm";
import { FaPlane, FaHotel, FaTrain, FaBus } from "react-icons/fa"; // Example icons
import { useState } from "react";

const TABS = [
  {
    id: "flights",
    label: "Flights",
    icon: FaPlane,
    component: FlightSearchForm,
  },
  { id: "hotels", label: "Hotels", icon: FaHotel, component: HotelSearchForm },
  { id: "trains", label: "Trains", icon: FaTrain, component: TrainSearchForm },
  { id: "buses", label: "Buses", icon: FaBus, component: BusSearchForm },
];

function SearchWidget() {
  const [activeTab, setActiveTab] = useState(TABS[0].id); // Default to flights

  const ActiveFormComponent = TABS.find(
    (tab) => tab.id === activeTab
  )?.component;

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-4xl">
      {/* Tab Buttons */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-3 px-4 sm:px-6 text-sm sm:text-base font-medium focus:outline-none transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
            }`}
          >
            <tab.icon className="text-lg" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Form Content */}
      <div>
        {ActiveFormComponent ? <ActiveFormComponent /> : <p>Select a tab</p>}
      </div>
    </div>
  );
}

export default SearchWidget;
