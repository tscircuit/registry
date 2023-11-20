import { FaRegClipboard } from "react-icons/fa"

export const PackageInstallInstructions = () => {
  const selectedInstallTarget = "Node"

  return (
    <>
      <div className="text-sm font-semibold flex items-center p-4 pb-2">
        <div className="text-gray-500">Install</div>
        <div className="flex-grow" />
        {["Node", "Deno"].map((installTarget) => (
          <button
            key={installTarget}
            className={`text-sm px-3 py-1 rounded-md mx-1 transition-all duration-300 ${
              installTarget === selectedInstallTarget
                ? "bg-gray-200 text-gray-800"
                : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
          >
            {installTarget}
          </button>
        ))}
      </div>
      <div className="border border-gray-300 p-2 m-4 mt-0 rounded-md text-sm flex items-center">
        <div className="font-extrabold text-gray-300">&gt;</div>
        <div className="pl-2 text-gray-600 font-medium flex-grow">
          npm i @seveibar/arduino-nano
        </div>
        <FaRegClipboard className="text-sm mr-1 text-gray-400" />
      </div>
    </>
  )
}
