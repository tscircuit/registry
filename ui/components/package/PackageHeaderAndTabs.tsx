import { FaGithub } from "react-icons/fa"
export const PackageHeaderAndTabs = ({
  selectedTab,
}: {
  selectedTab?: string
}) => (
  <div className="bg-white pt-6 z-0 relative shadow-sm">
    <div className="container mx-auto">
      <div>
        <div className="text-2xl font-semibold flex items-center">
          <div>@seveibar/arduino</div>
          <FaGithub className="ml-2 text-gray-600" />
        </div>
        <div className="flex text-md space-x-2 text-gray-500 mt-2">
          <div className="text-gray-500">4.1.21</div>
          <div className="">•</div>
          <div className="text-green-600">MIT</div>
          <div className="">•</div>
          <div className="">Last updated 10 minutes ago</div>
        </div>
      </div>
    </div>
    <div style={{ boxShadow: "inset 0px -3px 4px rgba(0,0,0,0.1)" }}>
      <div className="container mx-auto">
        <div className="flex mt-8">
          {["README", "Examples", "Code", "Versions"].map((item) => {
            const isSelected = item === selectedTab
            return (
              <div key={item} className="mr-0.5 relative">
                <a
                  className={`${
                    isSelected
                      ? "text-blue-500 border-b-0 bg-white"
                      : "text-gray-500 bg-gray-50"
                  } text-sm font-medium cursor-pointer py-2 px-4 inline-flex rounded-t-md border border-gray-300 bg-white`}
                >
                  {item}
                </a>
                {/* Blocks the shadow */}
                {isSelected && (
                  <div
                    className="bg-white absolute z-20"
                    style={{ bottom: -5, height: 10, left: 1, right: 1 }}
                  ></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div
      className="h-2 border-t border-gray-300"
      style={{ marginTop: -1 }}
    ></div>
    <div className="h-2 bg-white absolute right-0 left-0"></div>
  </div>
)
