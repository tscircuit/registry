import { FaStar } from "react-icons/fa"

export const ClickableRegistryItem = () => {
  return (
    <div className="flex-col border border-gray-300 rounded-md shadow-sm m-4">
      <div className="flex">
        <div className="flex p-4 text-lg">
          <a className="inline-flex text-blue-600 cursor-pointer">LemmyNet</a>
          <div className="mx-2 text-gray-400">/</div>
          <a className="inline-flex text-blue-700 font-medium cursor-pointer">
            lemmy
          </a>
        </div>
        <div className="flex-grow" />
        <div className="flex m-4 items-center bg-gray-100 border border-gray-300 rounded-sm shadow-sm p-1 cursor-pointer px-2">
          <FaStar className="text-gray-400 mr-2" />
          <div className="flex text-xs font-medium items-center">
            <div className="mr-2">Star</div>
            <div className="bg-gray-500 text-white py-0.5 px-1 rounded-md">
              12.3k
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 pt-0 px-4 text-gray-800">
        A link aggregator and forum for the fediverse
      </div>
      <div className="p-4 pt-2 text-xs text-gray-600">
        Updated 11 minutes ago
      </div>
    </div>
  )
}
