"use client"

import { useStore } from "../hooks/use-store"
import { FaRegUserCircle } from "react-icons/fa"

export const HeaderSignIn = () => {
  const session = useStore((s) => s.session)

  if (session) {
    return (
      <a
        className="hover:bg-gray-100 rounded-md px-2 py-2 inline-flex text-gray-700 text-xs font-medium mr-2 cursor-pointer whitespace-nowrap items-center"
        href={"/profile"}
      >
        <FaRegUserCircle className="text-xs mr-1" />
        {session.github_username}
      </a>
    )
  }

  return (
    <a
      className="hover:bg-gray-100 rounded-md px-4 py-2 inline-flex text-gray-700 text-xs font-medium mr-2 cursor-pointer whitespace-nowrap"
      href={"/signin"}
    >
      Sign In
    </a>
  )
}
