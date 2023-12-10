"use client"

import { Header } from "@/ui/components/Header"
import { PageLayout } from "@/ui/components/PageLayout"
import StytchProvider from "@/ui/components/StytchProvider"
import { useStore } from "@/ui/hooks/use-store"
import { getRegistryAxios } from "@/ui/lib/get-registry-axios"
import { useStytch } from "@stytch/nextjs"
import {
  OAuthAuthenticateResponse,
  MagicLinksAuthenticateResponse,
} from "@stytch/vanilla-js"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

async function exchangeSession(
  authRes: OAuthAuthenticateResponse | MagicLinksAuthenticateResponse
) {
  const axios = getRegistryAxios()
  const {
    data: { session },
  } = await axios.post("/sessions/create", {
    stytch_jwt: authRes.session_jwt,
  })
  return session
}

export const AuthenticatePageInnerContent = () => {
  const stytch = useStytch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const stytch_token_type = searchParams.get("stytch_token_type")
  const token = searchParams.get("token")
  const setSession = useStore((s) => s.setSession)
  const [message, setMessage] = useState("logging you in...")
  useEffect(() => {
    async function login() {
      let session
      if (token && stytch_token_type === "oauth") {
        const res = await stytch.oauth.authenticate(token, {
          session_duration_minutes: 60,
        })
        session = exchangeSession(res)
      }
      if (token && stytch_token_type === "magic_links") {
        const res = await stytch.magicLinks.authenticate(token, {
          session_duration_minutes: 60,
        })
        const session = exchangeSession(res)
      }

      if (!session) {
        setMessage("couldn't log in - no token")
        return
      }

      setSession(session)
      router.push("/")
    }
    login().catch((e) => {
      setMessage(`error logging you in\n\n${e.toString()}`)
    })
  }, [stytch_token_type, token, stytch])

  return (
    <div className="bg-white p-8 min-h-screen">
      <div>Authentication Redirect</div>
      <pre>{message}</pre>
    </div>
  )
}

export const AuthenticatePage = () => (
  <PageLayout header={<Header />}>
    <StytchProvider>
      <AuthenticatePageInnerContent />
    </StytchProvider>
  </PageLayout>
)

export default AuthenticatePage
