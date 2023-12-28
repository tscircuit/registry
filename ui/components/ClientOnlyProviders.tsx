"use client"
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

export const ClientOnlyProviders = ({ children }: { children: any }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
