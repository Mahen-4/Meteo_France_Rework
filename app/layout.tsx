import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './Components/Navbar/navBar'
import { ReduxProvider } from './redux/provider'
import '@/app/styles/globals.scss'
import Log from './Components/Log/log'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
        <body className={inter.className}>
          <ReduxProvider>
            <NavBar />
            <Log />
            {children}
          </ReduxProvider>
        </body>
      
    </html>
  )
}
