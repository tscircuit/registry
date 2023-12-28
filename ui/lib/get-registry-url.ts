export const getRegistryUrl = () => {
  let apiBaseUrl = "https://registry.tscircuit.com"

  if (
    typeof window !== "undefined" &&
    window.location.href.includes("localhost")
  ) {
    apiBaseUrl = new URL(window.location.href).origin
  }

  return apiBaseUrl
}
