import "./globals.css"
import AppLayout from "./App.Layout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <AppLayout>{children}</AppLayout>
        </body>
      </html>
    </>
  )
}
