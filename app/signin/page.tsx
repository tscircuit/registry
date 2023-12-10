import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { ClickableRegistryItem } from "@/ui/components/ClickableRegistryItem"
import { FaChevronDown } from "react-icons/fa"
import Dropdown from "@/ui/components/Dropdown"
import Login from "@/ui/components/Login"
import StytchProvider from "@/ui/components/StytchProvider"

export default function Home() {
  return (
    <PageLayout header={<Header />}>
      <div className="bg-white min-h-screen pt-8">
        <div className="container mx-auto flex flex-col pt-5 justify-center items-center">
          <div className="w-full max-w-sm flex flex-col p-4">
            <StytchProvider>
              <Login />
            </StytchProvider>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
