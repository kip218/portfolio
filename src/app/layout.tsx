import './globals.css'
import { Inter, Nunito, Kanit } from 'next/font/google'
import { Navbar } from './clientComponents.tsx'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })
export const kanit = Kanit({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"] })

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
      <body className={`${nunito.className} flex flex-col h-screen`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
