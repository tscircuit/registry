import { useRegistryApiQuery } from "./use-registry-api-query"

export const useCliSessions = () => {
  return useRegistryApiQuery("cli-sessions", (axios) =>
    axios
      .get("/sessions/list", {
        params: {
          is_cli_session: true,
        },
      })
      .then(
        (d) =>
          d.data.sessions as Array<{
            session_id: string
            expires_at: string
            created_at: string
          }>,
      ),
  )
}
