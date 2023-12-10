import defaultAxios from "axios"
export const getRegistryAxios = ({
  registryToken,
}: {
  registryToken?: string
} = {}) => {
  // TODO detect if local and use local registry api

  let apiBaseUrl = "https://registry-api.tscircuit.com"

  if (
    typeof window !== "undefined" &&
    window.location.href.includes("localhost")
  ) {
    apiBaseUrl = "http://localhost:3100"
  }

  const registryAxios = defaultAxios.create({
    baseURL: apiBaseUrl,
    headers: {
      Authorization: `Bearer ${registryToken}`,
    },
  })
  return registryAxios
}
