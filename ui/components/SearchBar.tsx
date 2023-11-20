import { FaSearch } from "react-icons/fa"

export const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <FaSearch className="text-gray-500 text-sm ml-2" />
      <input
        type="text"
        placeholder="Search for a package..."
        className="px-2 py-2 text-sm w-full outline-none"
      />
    </div>
  )
}
