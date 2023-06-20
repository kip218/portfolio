import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from './clientComponents.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kang In Park',
  description: 'My Portfolio',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
