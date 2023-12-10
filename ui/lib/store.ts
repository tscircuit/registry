import { createStore } from "zustand/vanilla"
import { persist } from "zustand/middleware"

export type Store = {
  session: {
    token: string
  } | null
  setSession: (session: any) => any
}

export const store = createStore<Store>()(
  persist(
    (set) => ({
      session: null,
      setSession: (session) => set({ session }),
    }),
    {
      name: "session_store",
    }
  )
)
