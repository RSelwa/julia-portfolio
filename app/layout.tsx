import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollSmootherComp from "@/components/scroll-smoother"
import StartAnimation from "@/components/start-animation"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Julia CARO - Directrice artistique",
  description: "Julia CARO - Directrice artistique parisienne",
  applicationName: "Julia CARO - Directrice artistique"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-beige lg:overflow-x-hidden">
        <ScrollSmootherComp>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <StartAnimation />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ScrollSmootherComp>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
