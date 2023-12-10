import { useStore as useZustandStore } from "zustand"
import { Store, store } from "../lib/store"
export const useStore = <T>(selector: (s: Store) => T) =>
  useZustandStore(store, selector)
