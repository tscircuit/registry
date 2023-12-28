import { FaGithub } from "react-icons/fa"
import { SearchBar } from "./SearchBar"
import { HeaderSignIn } from "./HeaderSignIn"

export const Header = ({ noShadow = false }: { noShadow?: boolean }) => {
  return (
    <div
      className={`p-4 flex bg-white border-gray-300 ${
        noShadow ? "" : "shadow-md border-b"
      }z-10 relative`}
    >
      <div className="container mx-auto flex items-center flex-col sm:flex-row">
        <div className="flex items-center mb-4 sm:mb-0">
          <a
            className="bg-blue-500 text-white dark:text-white dark:bg-blue-500 inline-flex p-1 px-2 font-semibold rounded-lg"
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
        </div>
        <div className="flex flex-col md:flex-row flex-grow items-center">
          <div className="md:ml-4">
            {["Trending Packages", "How to Publish", "Getting Started"].map(
              (item) => (
                <a
                  key={item}
                  className="inline-flex ml-6 text-xs text-gray-700 font-medium cursor-pointer whitespace-nowrap"
                >
                  {item}
                </a>
              ),
            )}
          </div>
          <div className="flex flex-grow items-center mt-4 md:mt-0 justify-end">
            <HeaderSignIn />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}
