import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { ClickableRegistryItem } from "@/ui/components/ClickableRegistryItem"
import { FaChevronDown } from "react-icons/fa"
import Dropdown from "@/ui/components/Dropdown"

export default function Home() {
  return (
    <PageLayout header={<Header />}>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col pt-5">
          <div className="flex pr-4">
            <div className="flex-grow" />
            <Dropdown />
          </div>
          <div className="mt-4 w-full border-t border-gray-300 min-h-screen">
            <ClickableRegistryItem />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
