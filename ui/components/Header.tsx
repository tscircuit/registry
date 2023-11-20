import { FaGithub } from "react-icons/fa"
import { SearchBar } from "./SearchBar"
export const Header = ({ noShadow = false }: { noShadow?: boolean }) => (
  <div
    className={`p-4 flex bg-white border-gray-300 ${
      noShadow ? "" : "shadow-md border-b"
    }z-10 relative`}
  >
    <div className="container mx-auto flex items-center">
      <a
        className="bg-blue-500 text-white inline-flex p-1 px-2 font-semibold rounded-lg"
        href="https://tscircuit.com"
      >
        tscircuit
      </a>
      <div className="ml-3 text-xs text-gray-600">
        Registry
        <br />
        v0.0.1
      </div>
      <a href="https://github.com/tscircuit/tscircuit" className="ml-3">
        <FaGithub style={{ fontSize: 18 }} className="text-gray-600" />
      </a>
      <div className="ml-4">
        {["Trending Packages", "How to Publish", "Getting Started"].map(
          (item) => (
            <a
              key={item}
              className="ml-6 text-xs text-gray-700 font-medium cursor-pointer"
            >
              {item}
            </a>
          )
        )}
      </div>
      <div className="flex-grow" />
      <a className="text-gray-700 text-xs font-medium mr-6 cursor-pointer">
        Sign In
      </a>
      <SearchBar />
    </div>
  </div>
)
