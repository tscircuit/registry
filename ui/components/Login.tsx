"use client"

import React from "react"
import { getDomainFromWindow } from "../lib/get-domain-from-window"
import { getRegistryApiUrl } from "../lib/get-registry-api-url"
import { getRegistryUrl } from "../lib/get-registry-url"

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-blue-500 text-sm text-white px-2 py-1 font-medium rounded-md"
        onClick={() => {
          window.location.href = `${getRegistryApiUrl()}/internal/oauth/github/authorize?next=${encodeURIComponent(
            `${getRegistryUrl()}/authenticate`,
          )}`
        }}
      >
        Login via Github
      </button>
    </div>
  )
}

export default Login
