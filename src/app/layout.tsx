import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Background } from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ganesh Veerapur | Frontend Developer & AI Learner",
  description: "A passionate BCA student skilled in HTML, CSS, JavaScript, React, and Angular, currently learning Artificial Intelligence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

