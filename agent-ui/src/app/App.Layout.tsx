import { ThemeProvider } from "next-themes"
import AppNavigate from "./App.Navigate"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AppNavigate />
        {children}
      </ThemeProvider>
    </>
  )
}

export default AppLayout
