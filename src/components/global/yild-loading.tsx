import { useTheme } from "next-themes"

export function YildLoading({ loading }: { loading: boolean}) {
  const { theme } = useTheme()
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen absolute left-0 top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur z-90">
        <p className={`text-xl animate-pulse ${theme === "light" ? "text-black" : "white"}`}>YILD IS LOADING...</p>
      </div>
    )
  return <></>
}