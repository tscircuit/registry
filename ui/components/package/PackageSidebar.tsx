import { FaRegClipboard } from "react-icons/fa"
import { PackageInstallInstructions } from "./PackageInstallInstructions"

export const PackageSidebar = () => {
  const selectedInstallTarget = "Node"
  return (
    <div className="flex-grow flex-col" style={{ minWidth: 500 }}>
      <PackageInstallInstructions />
    </div>
  )
}
