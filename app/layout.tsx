import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRUD APP',
  description: 'Develop with next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-w-3xm mx-auto p-4'>

        </div>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
