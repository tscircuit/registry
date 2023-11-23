import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import Image from "next/image"

export default function Home() {
  return (
    <PageLayout header={<Header />}>
      <div className="bg-white">
        <div className="container mx-auto flex pt-8">
          <div className=""></div>
        </div>
      </div>
    </PageLayout>
  )
}
