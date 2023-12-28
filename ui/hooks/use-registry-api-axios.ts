import type { AxiosInstance } from "axios"
import defaultAxios from "axios"
import { useStore } from "./use-store"
import { getRegistryApiUrl } from "../lib/get-registry-api-url"
import { useMemo } from "react"

export const useRegistryApiAxios = (): AxiosInstance => {
  const session = useStore((s) => s.session)
  return useMemo(() => {
    if (!session?.token) return null as any
    const axios = defaultAxios.create({
      baseURL: getRegistryApiUrl(),
      headers: {
        Authorization: `Bearer ${session!.token}`,
      },
    })
    return axios
  }, [session?.token])
}
