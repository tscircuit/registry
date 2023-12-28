import { ClientOnlyProviders } from "./ClientOnlyProviders"

export const PageLayout = ({
  header,
  children,
  fullWidth = false,
}: {
  header: any
  children: any
  fullWidth?: boolean
}) => {
  const containerClasses = !fullWidth ? "container mx-auto" : ""
  return (
    <div className="min-h-screen">
      {header}
      <div className={`${containerClasses} min-h-screen z-0`}>{children}</div>
    </div>
  )
}
