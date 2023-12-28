"use client"

import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { useStore } from "@/ui/hooks/use-store"

export const ProfilePage = () => {
  const session = useStore((s) => s.session)

  return (
    <PageLayout header={<Header />} fullWidth>
      <div className="container mx-auto h-screen bg-white p-4">
        {!session && (
          <div className="text-red">
            You must be signed in to view this page.
          </div>
        )}
        <div className="font-medium text-xl">Profile</div>
        <div>Github Username: {session?.github_username}</div>
        <div className="font-medium text-xl mt-8">CLI Tokens</div>
      </div>
    </PageLayout>
  )
}

export default ProfilePage
