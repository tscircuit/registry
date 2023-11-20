import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import Image from "next/image"

export default function Home() {
  return (
    <PageLayout header={<Header />}>
      <div>hello</div>
    </PageLayout>
  )
}
