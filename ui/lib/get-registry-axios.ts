import defaultAxios from "axios"
export const getRegistryAxios = ({
  registryToken,
}: {
  registryToken?: string
} = {}) => {
  // TODO detect if local and use local registry api
  const registryAxios = defaultAxios.create({
    baseURL: "https://registry-api.tscircuit.com",
    headers: {
      Authorization: `Bearer ${registryToken}`,
    },
  })
  return registryAxios
}
