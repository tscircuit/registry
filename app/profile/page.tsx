"use client"

import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { useCliSessions } from "@/ui/hooks/use-cli-sessions"
import { useRegistryApiAxios } from "@/ui/hooks/use-registry-api-axios"
import { useStore } from "@/ui/hooks/use-store"

export const ProfilePage = () => {
  const session = useStore((s) => s.session)
  const setSession = useStore((s) => s.setSession)
  const { data: cli_sessions } = useCliSessions()
  const axios = useRegistryApiAxios()

  return (
    <PageLayout header={<Header />} fullWidth>
      <div className="container mx-auto h-screen bg-white p-4">
        {!session && (
          <div className="text-red-800">
            You must be signed in to view this page.
          </div>
        )}
        {session && (
          <div className="text-green-800">
            You are signed in as {session?.github_username}.
            <button
              className="text-gray-800 font-medium ml-4 rounded-md text-sm bg-gray-100 px-2 py-1"
              onClick={() => {
                setSession(null)
              }}
            >
              Sign Out
            </button>
          </div>
        )}
        <div className="font-medium text-xl mt-4">Profile</div>
        <div>Github Username: {session?.github_username}</div>
        <div className="font-medium text-xl mt-8">CLI Tokens</div>
        <table className="table-auto">
          <thead>
            <tr>
              <td>session id</td>
              <td>created at</td>
              <td>expires at</td>
            </tr>
          </thead>
          <tbody>
            {cli_sessions?.map((cli_session) => (
              <tr key={cli_session.session_id}>
                <td>{cli_session.session_id}</td>
                <td>{cli_session.created_at}</td>
                <td>{cli_session.expires_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={async () => {
            await axios.post("/sessions/create", {
              is_cli_session: true,
            })
          }}
          className="px-2 py-1 bg-blue-500 text-white rounded-md"
        >
          Create new CLI Token
        </button>
      </div>
    </PageLayout>
  )
}

export default ProfilePage
