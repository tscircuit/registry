import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { MarkdownRenderer } from "@/ui/components/package/MarkdownRenderer"
import { PackageHeaderAndTabs } from "@/ui/components/package/PackageHeaderAndTabs"
import { PackageSidebar } from "@/ui/components/package/PackageSidebar"
import { markdownExample } from "@/ui/components/package/markdown-example"
import { FaRegClipboard } from "react-icons/fa"

export default function PackagePage() {
  const selectedTab = "README"
  return (
    <PageLayout header={<Header noShadow />} fullWidth>
      <PackageHeaderAndTabs selectedTab={selectedTab} />
      <div className="bg-white">
        <div className="container mx-auto flex pt-8">
          <div>
            <MarkdownRenderer markdown={markdownExample.trim()} />
          </div>
          <PackageSidebar />
        </div>
      </div>
    </PageLayout>
  )
}
