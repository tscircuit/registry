import { FaSearch } from "react-icons/fa"

export const LargeSearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <FaSearch className="text-gray-500 text-lg ml-2" />
      <input
        type="text"
        placeholder="Search for a package..."
        className="px-2 py-2 text-lg w-full outline-none"
      />
    </div>
  )
}
