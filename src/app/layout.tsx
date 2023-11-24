import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fleet Monitoring',
  description: 'TITIP TEST',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="bg-gray-200 h-screen">{children}</div>
        <ToastContainer />
      </body>
    </html>
  )
}