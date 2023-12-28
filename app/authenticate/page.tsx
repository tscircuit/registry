"use client"

import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import { useStore } from "@/ui/hooks/use-store"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import jwt from "jsonwebtoken"

export const AuthenticatePageInnerContent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const session_token = searchParams.get("session_token")
  const setSession = useStore((s) => s.setSession)
  const [message, setMessage] = useState("logging you in...")
  useEffect(() => {
    async function login() {
      if (!session_token) {
        setMessage("couldn't log in - no token")
        return
      }

      if (session_token) {
        setSession({
          ...jwt.decode(session_token),
          token: session_token,
        })
        router.push("/")
        return
      }
    }
    login().catch((e) => {
      setMessage(`error logging you in\n\n${e.toString()}`)
    })
  }, [session_token])

  return (
    <div className="bg-white p-8 min-h-screen">
      <div>Authentication Redirect</div>
      <pre>{message}</pre>
    </div>
  )
}

export const AuthenticatePage = () => (
  <PageLayout header={<Header />}>
    <AuthenticatePageInnerContent />
  </PageLayout>
)

export default AuthenticatePage
