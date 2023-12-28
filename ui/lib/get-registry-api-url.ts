export const getRegistryApiUrl = () => {
  let apiBaseUrl = "https://registry-api.tscircuit.com"

  if (
    typeof window !== "undefined" &&
    window.location.href.includes("localhost")
  ) {
    apiBaseUrl = "http://localhost:3100"
  }

  return apiBaseUrl
}
