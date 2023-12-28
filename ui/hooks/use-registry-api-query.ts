import { useQuery, QueryFunction, QueryKey } from "react-query"
import type { AxiosInstance } from "axios"
import defaultAxios from "axios"
import { useStore } from "./use-store"
import { getRegistryApiUrl } from "../lib/get-registry-api-url"

type AxiosQueryFn<R> = (axios: AxiosInstance) => Promise<R>

export const useRegistryApiQuery = <T>(qk: QueryKey, qfn: AxiosQueryFn<T>) => {
  const session = useStore((s) => s.session)
  return useQuery<T>(
    qk,
    async () => {
      const axios = defaultAxios.create({
        baseURL: getRegistryApiUrl(),
        headers: {
          Authorization: `Bearer ${session!.token}`,
        },
      })

      return await qfn(axios)
    },
    {
      enabled: Boolean(session),
    },
  )
}
