import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { ClickableRegistryItem } from "@/ui/components/ClickableRegistryItem"
import { FaChevronDown } from "react-icons/fa"

export default function Home() {
  return (
    <PageLayout header={<Header />}>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col pt-8">
          <div className="flex items-center px-4">
            <div className="text-gray-800 text-lg">Trending Packages</div>
            <div className="flex-grow" />
            <button className="flex items-center border border-gray-400 rounded-md p-2 text-xs font-medium cursor-pointer text-gray-800 px-3">
              Sort by: Trending Today
              <FaChevronDown className="text-gray-600 ml-2" />
            </button>
          </div>
          <div className="mt-4 w-full border-t border-gray-300 min-h-screen">
            <ClickableRegistryItem />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
