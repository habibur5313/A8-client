import { Search, MapPin, Calendar, ChevronDown } from 'lucide-react'
export function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 max-w-4xl mx-auto w-full border border-gray-100">
      {/* Destination Input */}
      <div className="flex-1 relative group">
        <label htmlFor="destination" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-2">
          Where to?
        </label>
        <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-blue-50 transition-colors">
          <MapPin className="w-5 h-5 text-blue-500 mr-3" />
          <input
            type="text"
            id="destination"
            placeholder="City or Country"
            className="bg-transparent w-full outline-none text-gray-800 font-medium placeholder-gray-400"
          />
        </div>
      </div>
      {/* Date Input */}
      <div className="flex-1 relative group">
        <label htmlFor="date" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-2">
          When?
        </label>
        <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-blue-50 transition-colors">
          <Calendar className="w-5 h-5 text-blue-500 mr-3" />
          <input
            type="date"
            id="date"
            className="bg-transparent w-full outline-none text-gray-800 font-medium placeholder-gray-400"
          />
        </div>
      </div>
      {/* Category Dropdown */}
      <div className="flex-1 relative group">
        <label htmlFor="category" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-2">
          Experience
        </label>
        <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 group-focus-within:bg-blue-50 transition-colors cursor-pointer relative">
          <Search className="w-5 h-5 text-blue-500 mr-3" />
          <select
            id="category"
            className="bg-transparent w-full outline-none text-gray-800 font-medium appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>Select Type</option>
            <option value="food">Food & Drink</option>
            <option value="history">History & Culture</option>
            <option value="nature">Nature & Hiking</option>
            <option value="photo">Photography</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 pointer-events-none" />
        </div>
      </div>
      {/* Search Button */}
      <div className="flex items-end">
        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
    </div>
  )
}